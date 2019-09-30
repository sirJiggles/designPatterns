import IIterator from './IIterator';
import IItem from './IItem';

// This is the iterator for when we are dealing with a menu list of items in
// an array
export default class DinerMenuIterator implements IIterator {
  menuItems: IItem[];
  position: 0;

  constructor(menuItems: IItem[]) {
    this.menuItems = menuItems;
  }

  hasNext() {
    return this.menuItems[this.position + 1] !== undefined;
  }
  next() {
    this.position += 1;
    return this.menuItems[this.position];
  }
}
