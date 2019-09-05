import Beverage from '../Beverage';

export default class DarkRoast implements Beverage {
  description = 'Dark roast coffee';

  get cost(): number {
    return 1.0;
  }
}
