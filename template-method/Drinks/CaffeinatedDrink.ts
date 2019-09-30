import ICaffeinatedDrink from './ICaffeinatedDrink';

export default abstract class CaffeinatedDrink implements ICaffeinatedDrink {
  wantsCondiments: boolean;

  constructor() {
    // default hook in super class
    this.wantsCondiments = true;
  }
  // THIS is the template method here, is a method, it serves as
  // the template for the algorithm of making a caffeinated drink!
  prepare() {
    // in the template each step is a method, some are implemented here
    // but some are in the subclass (these are abstract)
    this.boilWater();
    this.brew();
    this.pour();
    if (this.wantsCondiments) {
      this.addCondiments();
    }
  }
  boilWater() {
    console.log('we are boiling the water');
  }
  pour() {
    console.log('we are pouring the brew');
  }

  // this is the one the subclass MUST implement
  abstract brew(): void;

  addCondiments() {
    // this is the default for the hook here as it depends on what
    // the subclass sets for the wantsCondiments prop
  }
}
