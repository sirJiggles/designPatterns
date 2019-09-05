import Beverage from '../Beverage';

export default class Espresso implements Beverage {
  description = 'Espresso coffee';

  getDescription() {
    return this.description;
  }

  cost(): number {
    return 1.99;
  }
}
