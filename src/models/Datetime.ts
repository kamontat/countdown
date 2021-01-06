import dayjs from "dayjs";
import DurationPlugin from "dayjs/plugin/duration";
import UTCPlugin from "dayjs/plugin/utc";
import TimezonePlugin from "dayjs/plugin/timezone";
import CustomFormatPlugin from "dayjs/plugin/customParseFormat";
import RelativeTimePlugin from "dayjs/plugin/relativeTime";
import { SpecialDay } from "./SpecialDay";

dayjs.extend(DurationPlugin);
dayjs.extend(UTCPlugin);
dayjs.extend(TimezonePlugin);
dayjs.extend(CustomFormatPlugin);
dayjs.extend(RelativeTimePlugin);

dayjs.tz.setDefault(dayjs.tz.guess());

const startYear = () => {
  return dayjs().set("month", 0).set("date", 1).set("hour", 0).set("minute", 0).set("second", 0).set("millisecond", 0);
};

const startMonth = () => {
  return dayjs().set("date", 1).set("hour", 0).set("minute", 0).set("second", 0).set("millisecond", 0);
};

const endYear = () => {
  return dayjs()
    .set("month", 11)
    .set("date", 31)
    .set("hour", 23)
    .set("minute", 59)
    .set("second", 59)
    .set("millisecond", 999);
};

const endMonth = () => {
  const d = dayjs();
  return d.set("date", d.daysInMonth()).set("hour", 23).set("minute", 59).set("second", 59).set("millisecond", 999);
};

const now = () => {
  return dayjs();
};

class Datetime {
  static timestamp() {
    return now().valueOf();
  }

  static ms(ms: number) {
    return new Datetime("timestamp", dayjs(ms));
  }

  // FIXME: This should return only `DurationPlugin.Duration`, but PR iamkun/dayjs#1317 must be resolved first
  // PR: https://github.com/iamkun/dayjs/pull/1317
  static diff(ms: number): { d: DurationPlugin.Duration; negative: boolean } {
    if (ms < 0) return { d: dayjs.duration(Math.abs(ms)), negative: true };
    return { d: dayjs.duration(ms), negative: false };
  }

  static new(specialDay: SpecialDay, input: string, format?: string | null) {
    const build = (): { name: string; datetime: dayjs.Dayjs } => {
      const i = input.toLowerCase();

      if (specialDay.has(i)) return { name: specialDay.getName(i), datetime: specialDay.modify(i, now()) };
      else if (i === "now") return { name: "Now", datetime: now() };
      else if (i === "endyear") return { name: "End Year", datetime: endYear() };
      else if (i === "startyear") return { name: "Start Year", datetime: startYear() };
      else if (i === "endmonth") return { name: "End Month", datetime: endMonth() };
      else if (i === "startmonth") return { name: "Start Month", datetime: startMonth() };
      else if (format) return { name: format, datetime: dayjs(input, format) };
      else return { name: "Raw", datetime: dayjs(input) };
    };

    const o = build();
    return new Datetime(o.name, o.datetime);
  }

  private d: dayjs.Dayjs;
  constructor(private _name: string, d: dayjs.Dayjs) {
    this.d = d.isValid() ? d : dayjs();
  }

  get name() {
    return this._name;
  }

  diff(d: Datetime) {
    return dayjs.duration(this.d.diff(d.d, undefined, true));
  }

  ms(): number {
    return this.d.valueOf();
  }
}

export { Datetime };
