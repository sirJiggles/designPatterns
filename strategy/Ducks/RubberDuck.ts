import Duck from '../Duck';
import DoNotFly from '../FlyBehavior/DoNotFly';
import MakeNoQuack from '../QuackBehavior/MakeNoQuack';

export default class RubberDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new DoNotFly();
    this.quackBehavior = new MakeNoQuack();
  }
}
