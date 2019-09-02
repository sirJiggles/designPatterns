import Flyable from './Flyable';

export default class DoNotFly implements Flyable {
  fly() {
    console.log('I cannot fly');
  }
}
