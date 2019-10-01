import IIterator from './IIterator';
import IItem from './IItem';

// This iterator can handle arrays or sets
export default class PancakeHouseMenuIterator implements IIterator {
  menuItems: IItem[];
  position = 0;

  constructor(menuItems: IItem[]) {
    this.menuItems = menuItems;
  }

  hasNext() {
    // if we have one at the next array position
    return !(
      this.position > this.menuItems.length ||
      this.menuItems[this.position] === undefined
    );
  }
  next(): IItem {
    const item = this.menuItems[this.position];
    this.position += 1;
    return item;
  }
}
