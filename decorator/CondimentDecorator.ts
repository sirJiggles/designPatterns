import Beverage from './Beverage';

export default class CondimentDecorator implements Beverage {
  description = '';

  getDescription(): string {
    return this.description;
  }

  cost() {
    return 0;
  }
}
