import { MonthlyCalculator } from './monthlyCalculator';

export class HourFlexPackageCalculator implements MonthlyCalculator {
  calculate(totalHours: number): number {
    return totalHours * 50;
  }
}
