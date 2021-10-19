import DurationPlugin from "dayjs/plugin/duration";
import { Datetime } from "./Datetime";

enum OutputType {
  MILLISECOND = "ms", // 1
  SECOND = "s", // 1
  DAY = "d", // 1
  WEEK = "w", // 1
  SECOND_MILLISECOND = "sms", // 2
  MINUTE_SECOND_MILLISECOND = "msms", // 3
  HOUR_MINUTE_SECOND = "hms", // 3
  DAY_HOUR_MINUTE_SECOND = "dhms", // 4
}

const convert = (name: string | undefined | null): OutputType => {
  const defaults = OutputType.MINUTE_SECOND_MILLISECOND;
  if (name === undefined || name === null) return defaults;

  const key = (Object.keys(OutputType) as [keyof typeof OutputType]).find(key => OutputType[key] === name);
  return key === undefined ? defaults : OutputType[key];
};

enum TimeUnit {
  YEAR = "y|year",
  MONTH = "m|month",
  WEEK = "w|week",
  DAY = "d|day",
  HOUR = "h|hour",
  MINUTE = "m|minute",
  SECOND = "s|second",
  MILLISECOND = "ms|millisecond",
}

interface OutputObject {
  number: number;
  digit: number;
  unit: string;
  shortUnit: string;
}

interface NumberOption {
  digit: number;
  negative: boolean;
}

const numberUnit = (n: number, u: TimeUnit, opt: NumberOption): OutputObject => {
  const a = u.split("|");
  return {
    number: Math.floor(n) * (opt.negative ? -1 : 1),
    digit: opt.digit,
    shortUnit: a[0],
    unit: a[1],
  };
};

class Output {
  private name: OutputType;
  constructor(name: string | null) {
    this.name = convert(name);
  }

  format(ms: number): OutputObject[] {
    const o = Datetime.diff(ms);
    return this._format(o.d, o.negative);
  }

  _format(duration: DurationPlugin.Duration, negative: boolean): OutputObject[] {
    switch (this.name) {
      case OutputType.MILLISECOND:
        return [numberUnit(duration.asMilliseconds(), TimeUnit.MILLISECOND, { digit: 12, negative })];
      case OutputType.SECOND:
        return [numberUnit(duration.asSeconds(), TimeUnit.SECOND, { digit: 9, negative })];
      case OutputType.DAY:
        return [numberUnit(duration.asDays(), TimeUnit.DAY, { digit: 7, negative })];
      case OutputType.WEEK:
        return [numberUnit(duration.asWeeks(), TimeUnit.WEEK, { digit: 5, negative })];
      case OutputType.SECOND_MILLISECOND:
        return [
          numberUnit(duration.asSeconds(), TimeUnit.SECOND, { digit: 9, negative }),
          numberUnit(duration.milliseconds(), TimeUnit.MILLISECOND, { digit: 3, negative }),
        ];
      case OutputType.MINUTE_SECOND_MILLISECOND:
        return [
          numberUnit(duration.asMinutes(), TimeUnit.MINUTE, { digit: 7, negative }),
          numberUnit(duration.seconds(), TimeUnit.SECOND, { digit: 2, negative }),
          numberUnit(duration.milliseconds(), TimeUnit.MILLISECOND, { digit: 3, negative }),
        ];
      case OutputType.HOUR_MINUTE_SECOND:
        return [
          numberUnit(duration.asHours(), TimeUnit.HOUR, { digit: 6, negative }),
          numberUnit(duration.minutes(), TimeUnit.MINUTE, { digit: 2, negative }),
          numberUnit(duration.seconds(), TimeUnit.SECOND, { digit: 2, negative }),
        ];
      case OutputType.DAY_HOUR_MINUTE_SECOND:
        return [
          numberUnit(duration.asDays(), TimeUnit.DAY, { digit: 4, negative }),
          numberUnit(duration.hours(), TimeUnit.HOUR, { digit: 2, negative }),
          numberUnit(duration.minutes(), TimeUnit.MINUTE, { digit: 2, negative }),
          numberUnit(duration.seconds(), TimeUnit.SECOND, { digit: 2, negative }),
        ];
      default:
        return [];
    }
  }
}

export { Output, OutputType };
export type { OutputObject };
