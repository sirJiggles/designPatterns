import Beverage from '../Beverage';

export default class Milk implements Beverage {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    this.beverage = beverage;
  }

  get description() {
    return `${this.beverage.description}, Milk`;
  }

  get cost() {
    return this.beverage.cost + 0.2;
  }
}
