import Quackable from './Quakable';

export default class MakeNoQuack implements Quackable {
  quack() {
    console.log('.... ');
  }
}
