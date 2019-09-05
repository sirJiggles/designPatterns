import Beverage from '../Beverage';

export default class Mocha implements Beverage {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    this.beverage = beverage;
  }

  get description() {
    return `${this.beverage.description}, Mocha`;
  }

  get cost(): number {
    return this.beverage.cost + 0.5;
  }
}
