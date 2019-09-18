import CaffeinatedDrink from './CaffeinatedDrink';

export default class Coffee extends CaffeinatedDrink {
  brew() {
    console.log('dripping coffee through a filter');
  }
  addCondiments() {
    console.log('adding sugar and milk');
  }
}
