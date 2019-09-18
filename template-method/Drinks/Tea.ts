import CaffeinatedDrink from './CaffeinatedDrink';

export default class Tea extends CaffeinatedDrink {
  brew() {
    console.log('steeping the tea');
  }
  addCondiments() {
    console.log('adding lemon');
  }
}
