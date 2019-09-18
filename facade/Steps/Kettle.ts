import IKettle from './IKettle';

export default class Kettle implements IKettle {
  fillUp() {
    console.log('filling up the kettle');
  }
  pour() {
    console.log('pouring the water');
  }
  boil() {
    console.log('boil the kettle');
  }
}
