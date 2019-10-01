import IIterator from './IIterator';
import IItem from './IItem';
import IDinerItem from './IDinerItem';

// This iterator can handle arrays or sets
export default class DinerMenuIterator implements IIterator {
  menuItems: IDinerItem[];
  position = 0;

  constructor(menuItems: IDinerItem[]) {
    this.menuItems = menuItems;
  }

  hasNext() {
    // check if we have one at the next index
    return (
      this.menuItems.filter(item => item.index && item.index === this.position)
        .length > 0 || this.menuItems.length > this.position
    );
  }
  next(): IItem {
    const item = this.menuItems[this.position].val;
    this.position += 1;
    return item;
  }
}
