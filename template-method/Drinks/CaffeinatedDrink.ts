import ICaffeinatedDrink from './ICaffeinatedDrink';

export default abstract class CaffeinatedDrink implements ICaffeinatedDrink {
  // THIS is the template method here, is a method, it serves as
  // the template for the algorithm of making a caffeinated drink!
  prepare() {
    // in the template each step is a method, some are implemented here
    // but some are in the subclass (these are abstract)
    this.boilWater();
    this.brew();
    this.pour();
    this.addCondiments();
  }
  boilWater() {
    console.log('we are boiling the water');
  }
  pour() {
    console.log('we are pouring the brew');
  }
  abstract brew(): void;
  abstract addCondiments(): void;
}
