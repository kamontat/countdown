import DurationPlugin from "dayjs/plugin/duration";
import { Datetime } from "./Datetime";

enum OutputType {
  MILLISECOND, // 1
  SECOND, // 1
  SECOND_MILLISECOND, // 2
  MINUTE_SECOND_MILLISECOND, // 3
  HOUR_MINUTE_SECOND, // 3
  DAY_HOUR_MINUTE_SECOND, // 4
}

enum TimeUnit {
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

const numberUnit = (n: number, u: TimeUnit, d: number): OutputObject => {
  const a = u.split("|");
  return {
    number: Math.floor(n),
    digit: d,
    shortUnit: a[0],
    unit: a[1],
  };
};

class Output {
  private name: OutputType;
  constructor(name: string | null) {
    if (name === null) this.name = OutputType.MINUTE_SECOND_MILLISECOND;
    else if (name === "ms") this.name = OutputType.MILLISECOND;
    else if (name === "s") this.name = OutputType.SECOND;
    else if (name === "sms") this.name = OutputType.SECOND_MILLISECOND;
    else if (name === "msms") this.name = OutputType.MINUTE_SECOND_MILLISECOND;
    else if (name === "hms") this.name = OutputType.HOUR_MINUTE_SECOND;
    else if (name === "dhms") this.name = OutputType.DAY_HOUR_MINUTE_SECOND;
    else this.name = OutputType.MINUTE_SECOND_MILLISECOND;
  }

  format(ms: number): OutputObject[] {
    return this._format(Datetime.diff(ms));
  }

  _format(duration: DurationPlugin.Duration): OutputObject[] {
    switch (this.name) {
      case OutputType.MILLISECOND:
        return [numberUnit(duration.asMilliseconds(), TimeUnit.MILLISECOND, 12)];
      case OutputType.SECOND:
        return [numberUnit(duration.asSeconds(), TimeUnit.SECOND, 9)];
      case OutputType.SECOND_MILLISECOND:
        return [
          numberUnit(duration.asSeconds(), TimeUnit.SECOND, 9),
          numberUnit(duration.milliseconds(), TimeUnit.MILLISECOND, 3),
        ];
      case OutputType.MINUTE_SECOND_MILLISECOND:
        return [
          numberUnit(duration.asMinutes(), TimeUnit.MINUTE, 7),
          numberUnit(duration.seconds(), TimeUnit.SECOND, 2),
          numberUnit(duration.milliseconds(), TimeUnit.MILLISECOND, 3),
        ];
      case OutputType.HOUR_MINUTE_SECOND:
        return [
          numberUnit(duration.asHours(), TimeUnit.HOUR, 6),
          numberUnit(duration.minutes(), TimeUnit.MINUTE, 2),
          numberUnit(duration.seconds(), TimeUnit.SECOND, 2),
        ];
      case OutputType.DAY_HOUR_MINUTE_SECOND:
        return [
          numberUnit(duration.asDays(), TimeUnit.DAY, 4),
          numberUnit(duration.hours(), TimeUnit.HOUR, 2),
          numberUnit(duration.minutes(), TimeUnit.MINUTE, 2),
          numberUnit(duration.seconds(), TimeUnit.SECOND, 2),
        ];
      default:
        return [];
    }
  }
}

export { Output, OutputType };
export type { OutputObject };
