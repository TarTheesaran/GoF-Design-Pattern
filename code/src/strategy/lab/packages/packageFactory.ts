import { FixedPackageCalculator } from './fixedPackageCalculator';
import { HourFlexPackageCalculator } from './hourFlexPackageCalulator';
import { MonthlyCalculator } from './monthlyCalculator';
import { PackageType } from './packageType';
import { SteppingPackageCalculator } from './steppingPackageCalculator';
import { UnknownPackageCalculator } from './unknownPackageCalculator';

export class PackageFactory {
  static createPackage(packageType: PackageType): MonthlyCalculator {
    switch (packageType) {
      case PackageType.FIXED:
        return new FixedPackageCalculator();
      case PackageType.HOUR_FLEX:
        return new HourFlexPackageCalculator();
      case PackageType.STEPPING:
        return new SteppingPackageCalculator();
      default:
        return new UnknownPackageCalculator();
    }
  }
}
