import PancakeHouseMenu from './PancakeHouseMenu';
import DinerMenu from './DinerMenu';
import IIterator from './IIterator';
import IItem from './IItem';

export default class Waitress {
  pancakeHouseMenu: PancakeHouseMenu;
  dinerMenu: DinerMenu;

  constructor(pancakeHouse: PancakeHouseMenu, dinerMenu: DinerMenu) {
    this.pancakeHouseMenu = pancakeHouse;
    this.dinerMenu = dinerMenu;
  }

  public printMenu() {
    const pancakeIterator = this.pancakeHouseMenu.createIterator();
    const dinerIterator = this.dinerMenu.createIterator();
    console.log('The menu from the pancake house: \n');
    this.printItems(pancakeIterator);
    console.log('The menu from the diner:\n');
    this.printItems(dinerIterator);
  }

  // note this WILL break if we try to use an obj like
  // {index:1, val:thing, index:-1, val: another}
  // but this is a demo obviously not production ready code
  private printItems(iterator: IIterator) {
    while (iterator.hasNext()) {
      const item: IItem = iterator.next();
      console.log(`name: ${item.name}`);
      console.log(`description: ${item.description}`);
      console.log(`price: ${item.price}\n`);
    }
  }
}
