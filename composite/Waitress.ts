import MenuComponent from './MenuComponent';

export default class Waitress {
  // the top component is a menu that may contain nested menus
  allMenus: MenuComponent;

  constructor(menus: MenuComponent) {
    this.allMenus = menus;
  }

  printMenu() {
    this.allMenus.print();
  }
}
