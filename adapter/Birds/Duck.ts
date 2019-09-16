import IDuck from './IDuck';

export default class Duck implements IDuck {
  fly() {
    console.log('I am a flying duck');
  }
  quack() {
    console.log('quack');
  }
}
