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

  static now() {
    return new Datetime(now());
  }

  static ms(ms: number) {
    return new Datetime(dayjs(ms));
  }

  static diff(ms: number) {
    return dayjs.duration(ms);
  }

  static new(specialDay: SpecialDay, input: string, format?: string | null) {
    const build = () => {
      const i = input.toLowerCase();

      if (specialDay.has(i)) return specialDay.modify(i, now());
      else if (i === "now") return now();
      else if (i === "endyear") return endYear();
      else if (i === "startyear") return startYear();
      else if (i === "endmonth") return endMonth();
      else if (i === "startmonth") return startMonth();
      else if (format) return dayjs(input, format);
      else return dayjs(input);
    };

    return new Datetime(build());
  }

  private d: dayjs.Dayjs;
  constructor(d: dayjs.Dayjs) {
    this.d = d.isValid() ? d : dayjs();
  }

  diff(d: Datetime) {
    return dayjs.duration(this.d.diff(d.d, undefined, true));
  }

  ms(): number {
    return this.d.valueOf();
  }
}

export { Datetime };
