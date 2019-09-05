import Beverage from '../Beverage';

export default class Mocha implements Beverage {
  beverage: Beverage;
  description = 'Mocha';

  constructor(beverage: Beverage) {
    this.beverage = beverage;
  }

  getDescription() {
    return `${this.beverage.getDescription()}, ${this.description}`;
  }

  cost() {
    return this.beverage.cost() + 0.5;
  }
}
