import { UnknownPackageCalculator } from './packages/unknownPackageCalculator';
import { FixedPackageCalculator } from './packages/fixedPackageCalculator';
import { HourFlexPackageCalculator } from './packages/hourFlexPackageCalulator';
import { PackageType } from './packages/packageType';
import { MonthlyCalculator } from './packages/monthlyCalculator';
import { SteppingPackageCalculator } from './packages/steppingPackageCalculator';
import { PackageFactory } from './packages/packageFactory';

export class Billing {
  private vatRate = 7.0;
  private totalHours: number;
  private packageType: PackageType;

  constructor(totalHours: number, packageType: PackageType) {
    this.totalHours = totalHours;
    this.packageType = packageType;
  }

  public monthlyBill(): number {
    var total = PackageFactory.createPackage(
      this.packageType as PackageType
    ).calculate(this.totalHours);
    return this.totalWithVal(total);
  }

  private totalWithVal(total: number): number {
    return total + (total * this.vatRate) / 100;
  }
}
