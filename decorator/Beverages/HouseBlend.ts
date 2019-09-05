import Beverage from '../Beverage';

export default class HouseBlend implements Beverage {
  description = 'House Bled coffee';

  getDescription() {
    return this.description;
  }

  cost(): number {
    return 0.89;
  }
}
