import Beverage from '../Beverage';

export default class Decaf implements Beverage {
  description = 'Decaf coffee';

  get cost(): number {
    return 1.2;
  }
}
