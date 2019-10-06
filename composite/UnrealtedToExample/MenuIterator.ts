// For more information on the iterator pattern have a look at the
// docs / demo for that

import IIterator from './IIterator';
import MenuComponent from '../MenuComponent';

export default class MenuIterator implements IIterator {
  menuComponents: MenuComponent[] = [];
  position = 0;

  hasNext() {
    // if we have one at the next array position
    return !(
      this.position > this.menuComponents.length ||
      this.menuComponents[this.position] === undefined
    );
  }
  next(): MenuComponent {
    const component = this.menuComponents[this.position];
    this.position += 1;
    return component;
  }
}
