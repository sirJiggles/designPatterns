import Beverage from '../Beverage';

export default class DarkRoast implements Beverage {
  description = 'Dark roast coffee';

  getDescription() {
    return this.description;
  }

  cost(): number {
    return 1.0;
  }
}
