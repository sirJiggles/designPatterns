import Beverage from '../Beverage';

export default class Espresso implements Beverage {
  description = 'Espresso coffee';

  get cost(): number {
    return 1.99;
  }
}
