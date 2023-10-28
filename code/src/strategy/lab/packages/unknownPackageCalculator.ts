import { MonthlyCalculator } from './monthlyCalculator';

export class UnknownPackageCalculator implements MonthlyCalculator {
  calculate(totalHours: number): number {
    return 0;
  }
}
