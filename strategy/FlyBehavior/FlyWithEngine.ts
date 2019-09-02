import Flyable from './Flyable';

export default class FlyWithEngine implements Flyable {
  fly() {
    console.log('I can fly with the power of man');
  }
}
