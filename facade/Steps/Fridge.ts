import IFridge from './IFridge';

export default class Fridge implements IFridge {
  open() {
    console.log('opening the fridge');
  }
  reachFor(item: string) {
    console.log(`reaching for ${item}`);
  }
  putBack(item: string) {
    console.log(`putting back ${item}`);
  }
  close() {
    console.log('closing the fridge');
  }
}
