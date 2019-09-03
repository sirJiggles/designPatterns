import Observer from '../Observer';
import DisplayElement from './DisplayElement';

export default class Forecast implements Observer, DisplayElement {
  display(): void {
    // ...
  }
  update(): void {
    // ..
  }
}
