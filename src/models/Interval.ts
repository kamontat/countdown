import { Logger } from "./Logger";

class Interval {
  private logger: Logger = new Logger("model", "interval");
  private amount: number;
  private unit: string;

  private errors: Error[];

  constructor(input: string | undefined | null) {
    this.amount = -1;
    this.unit = "ms";
    this.errors = [];

    const numbers = /[0-9]+/g.exec(input ?? "");
    if (numbers === null || numbers.length < 1) this.errors.push(new Error(`Cannot extract number from '${input}'`));
    this.logger.debug(`step 1: extracted numbers, received %o`, numbers);

    const units = /[a-z]+/g.exec(input ?? "");
    this.logger.debug(`step 2: extracted units, received %o`, units);

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

  getAmount(multiply?: number): number | undefined {
    if (this.amount === -1) return undefined;
    else return this.amount * (multiply ?? 1);
  }

  hasError() {
    return this.errors.length > 0;
  }

  getErrors() {
    return Array.from(this.errors);
  }

  ms(): number | undefined {
    if (this.hasError()) return this.getAmount();
    else if (this.unit === "ms" || this.unit.includes("millisecond")) return this.getAmount();
    else if (this.unit === "s" || this.unit.includes("second")) return this.getAmount(1_000);
    else if (this.unit === "m" || this.unit.includes("min")) return this.getAmount(60_000);
    else if (this.unit === "h" || this.unit.includes("hour")) return this.getAmount(3_600_000);
    else return this.getAmount();
  }
}

export { Interval };
