import CaffeinatedDrink from './CaffeinatedDrink';

export default class Tea extends CaffeinatedDrink {
  constructor() {
    super();
    this.wantsCondiments = false;
  }

  brew() {
    console.log('steeping the tea');
  }
  addCondiments() {
    console.log('SHOULD NOT SEE THIS');
  }
}
