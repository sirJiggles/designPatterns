import Flyable from './FlyBehavior/Flyable';
import Quackable from './QuackBehavior/Quakable';

// abstract super class 'behold the duck'
export default class Duck {
  // these can be overridden at run time
  flyBehavior!: Flyable;
  quackBehavior!: Quackable;

  display() {
    // default
  }

  performFly() {
    this.flyBehavior.fly();
  }

  performQuack() {
    this.quackBehavior.quack();
  }
}
