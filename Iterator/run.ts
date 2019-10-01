import IItem from './IItem';
import IDinerItem from './IDinerItem';
import DinerMenu from './DinerMenu';
import PancakeHouseMenu from './PancakeHouseMenu';
import Waitress from './Waitress';

// lets make some fake menus
const pancakeHouseMenu: IItem[] = [
  { name: 'Awesome pancakes', description: 'they are great', price: 23.3 },
  { name: 'Lame pancakes', description: 'they are NOT great', price: 10.0 },
  { name: 'Golden pancakes', description: 'they are GOLDEN', price: 100.0 }
];

const dinerMenu: IDinerItem[] = [
  {
    index: 0,
    val: {
      name: 'egg and beans',
      description: 'eggs and beans, what a dish',
      price: 2.0
    }
  },
  {
    index: 1,
    val: {
      name: 'boiled ham',
      description: 'its a pig, but we boiled it',
      price: 4.2
    }
  },
  {
    index: 2,
    val: {
      name: 'salad',
      description: 'mmmm healthy!',
      price: 1.2
    }
  }
];

// now lets make the houses
const diner = new DinerMenu(dinerMenu);
const pancakeHouse = new PancakeHouseMenu(pancakeHouseMenu);
// and the waitress
const waitress = new Waitress(pancakeHouse, diner);

// lets now print those menus!
waitress.printMenu();
