import Beverage from '../Beverage';

export default class Decaf implements Beverage {
  description = 'Decaf coffee';

  getDescription() {
    return this.description;
  }

  cost(): number {
    return 1.2;
  }
}
