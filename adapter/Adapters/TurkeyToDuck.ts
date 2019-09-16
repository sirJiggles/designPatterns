import IDuck from '../Birds/IDuck';
import ITurkey from '../Birds/ITurkey';

export default class TurkeyToDuckAdapter implements IDuck {
  turkey: ITurkey;

  constructor(turkey: ITurkey) {
    this.turkey = turkey;
  }

  fly() {
    // flys by doing lots of little flutters
    for (let i = 0; i < 5; i++) {
      this.turkey.fly();
    }
  }

  quack() {
    this.turkey.gobble();
  }
}
