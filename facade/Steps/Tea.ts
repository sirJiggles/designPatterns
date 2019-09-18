import ITea from './ITea';

export default class Tea implements ITea {
  getBag() {
    console.log('getting tea bag');
  }
  stur() {
    console.log('sturring tea');
  }
  sip() {
    console.log('sipping tea ... mmmm');
  }
}
