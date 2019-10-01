import IIterator from './IIterator';
import DinerMenuIterator from './DinerMenuIterator';
import IDinerItem from './IDinerItem';

export default class DinerMenu {
  items: IDinerItem[];

  constructor(items: IDinerItem[]) {
    this.items = items;
  }

  createIterator(): IIterator {
    return new DinerMenuIterator(this.items);
  }

  //.. some other custom stuff for this guy
}
