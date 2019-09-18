import IMilk from './IMilk';

export default class Milk implements IMilk {
  open() {
    console.log('opening the milk');
  }
  close() {
    console.log('closing the milk');
  }
  pour() {
    console.log('pouring the milk');
  }
}
