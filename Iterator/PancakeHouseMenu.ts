import IIterator from './IIterator';
import IItem from './IItem';
import PancakeHouseIterator from './PancakeHouseMenuIterator';

export default class PancakeHouseMenu {
  items: IItem[];

  constructor(items: IItem[]) {
    this.items = items;
  }

  createIterator(): IIterator {
    return new PancakeHouseIterator(this.items);
  }

  //.. some other custom stuff for this guy
}
