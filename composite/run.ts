import MenuItem from './MenuItem';
import Menu from './Menu';
import Waitress from './Waitress';

const allMenus = new Menu(
  'All the menus',
  'a combination of all the menus we have here'
);

const lunchMenu = new Menu('Lunch Menu', 'A menu for just the lunch items');
const breakfastMenu = new Menu(
  'Breakfast menu',
  'this is the menu that we serve just in the morning'
);

allMenus.add(lunchMenu);
allMenus.add(breakfastMenu);

// just some random items to add to our menus
const menuItemOne = new MenuItem(
  'egg and beans',
  'some beans and some eggs with the beans on some toast',
  false,
  12.3
);
const menuItemTwo = new MenuItem(
  'ham and bacon',
  'some ham bacon and veg in a lovely sauce',
  false,
  23.0
);
const menuItemThree = new MenuItem(
  'Veggie burger',
  'a Burger without consequences',
  true,
  5.0
);

lunchMenu.add(menuItemOne);
breakfastMenu.add(menuItemTwo);
breakfastMenu.add(menuItemThree);

const waitress = new Waitress(allMenus);

// start the recursive print on all the menu items
waitress.printMenu();
