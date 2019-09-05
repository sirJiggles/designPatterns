import Beverage from '../Beverage';

export default class HouseBlend implements Beverage {
  description = 'House Bled coffee';

  get cost(): number {
    return 0.89;
  }
}
