import { Logger } from "./Logger";

class Interval {
  private logger: Logger = new Logger("model", "interval");
  private amount: number;
  private unit: string;

  private errors: Error[];

  constructor(input: string) {
    this.amount = 0;
    this.unit = "ms";
    this.errors = [];

    const numbers = /[0-9]+/g.exec(input);
    if (numbers === null || numbers.length < 1) this.errors.push(new Error(`Cannot extract number from '${input}'`));
    this.logger.debug(`step 1: extracted numbers, received %o`, numbers);

    const units = /[a-z]+/g.exec(input);
    this.logger.debug(`step 1: extracted units, received %o`, units);

    if (numbers !== null) {
      const number = parseFloat(numbers[0]);
      if (isFinite(number)) this.amount = number;
      else this.errors.push(new Error(`Input amount this not number, ${number}`));
    }

    if (units !== null) {
      const unit = units[0];
      if (unit) this.unit = unit;
    }
  }

  hasError() {
    return this.errors.length > 0;
  }

  getErrors() {
    return Array.from(this.errors);
  }

  ms(): number | undefined {
    if (this.hasError()) return undefined;
    else if (this.unit === "ms" || this.unit.includes("millisecond")) return this.amount;
    else if (this.unit === "s" || this.unit.includes("second")) return this.amount * 1_000;
    else if (this.unit === "m" || this.unit.includes("min")) return this.amount * 60_000;
    else if (this.unit === "h" || this.unit.includes("hour")) return this.amount * 3_600_000;
    else return undefined;
  }
}

export { Interval };
