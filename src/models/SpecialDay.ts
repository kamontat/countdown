import dayjs from "dayjs";
import sday from "../db/special-day.json";
import { Logger } from "./Logger";

export interface SpecialDayCalendar {
  year?: number;
  month?: number;
  date?: number;
  hour?: number;
  minute?: number;
  second?: number;
  millisecond?: number;
}

export interface SpecialDayElement {
  name: string;
  key: string;
  calendar: SpecialDayCalendar;
}

class Modifier<T, O> {
  constructor(private t: T, private checker: (o: O) => boolean) {}

  modify(o: O | undefined | null, action: (t: T, o: O) => T): Modifier<T, O> {
    if (o === undefined || o === null || !this.checker(o)) {
      return this;
    }
    return new Modifier<T, O>(action(this.t, o), this.checker);
  }

  get() {
    return this.t;
  }
}

class SpecialDay {
  private logger: Logger = new Logger("model", "special-day");
  private sday: Map<string, SpecialDayElement>;
  constructor() {
    this.sday = new Map();
    sday.forEach(v => this.sday.set(v.key, v));
    this.logger.debug("loading db size: %d", this.sday.size);
  }

  has(key: string): boolean {
    return this.sday.has(key);
  }

  private isExist(n?: number | null) {
    return n !== undefined && n !== null && n !== -1;
  }

  modify(key: string, datetime: dayjs.Dayjs): dayjs.Dayjs {
    if (this.has(key)) {
      const modifier: SpecialDayElement = this.sday.get(key) as SpecialDayElement;
      this.logger.debug("received modifier object: %o", modifier);

      const newDatetime = new Modifier<dayjs.Dayjs, number>(datetime, this.isExist)
        .modify(modifier.calendar.year, (d, n) => d.set("year", n))
        .modify(modifier.calendar.month, (d, n) => d.set("month", n - 1))
        .modify(modifier.calendar.date, (d, n) => d.set("date", n))
        .modify(modifier.calendar.hour, (d, n) => d.set("hour", n))
        .modify(modifier.calendar.minute, (d, n) => d.set("minute", n))
        .modify(modifier.calendar.second, (d, n) => d.set("second", n))
        .modify(modifier.calendar.millisecond, (d, n) => d.set("millisecond", n))
        .get();

      this.logger.debug("received new datetime: %s", newDatetime.toString());

      let finalDatetime = newDatetime;
      let count = 0;
      while (!finalDatetime.isAfter(datetime)) {
        count === 0 && this.logger.debug("On modify...");
        if (count > 50) {
          this.logger.error("reach timeout, cannot modified (%s)", finalDatetime);
          break;
        }

        if (!this.isExist(modifier.calendar.year)) {
          this.logger.debug("step %d: Add one more year", count);
          finalDatetime = finalDatetime.add(1, "year");
        }

        count++;
      }

      this.logger.debug("received modified datetime: %s", finalDatetime.toString());

      return finalDatetime;
    }
    return datetime;
  }
}

export { SpecialDay };
