import ITurkey from './ITurkey';

export default class Turkey implements ITurkey {
  fly() {
    console.log('fly a little');
  }
  gobble() {
    console.log('gobble gobble gobble');
  }
}
