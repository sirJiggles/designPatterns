import CondimentDecorator from '../CondimentDecorator';
import Beverage from '../Beverage';

export default class Milk implements Beverage {
  beverage: Beverage;

  description = 'Milk';

  constructor(beverage: Beverage) {
    // super();
    this.beverage = beverage;
  }

  getDescription() {
    return `${this.beverage.getDescription()}, ${this.description}`;
  }

  cost() {
    return this.beverage.cost() + 0.2;
  }
}
