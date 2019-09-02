import Duck from '../Duck';
import FlyWithWings from '../FlyBehavior/FlyWithWings';
import QuackLikeADuck from '../QuackBehavior/QuackLikeADuck';

export default class RegularDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new QuackLikeADuck();
  }
}
