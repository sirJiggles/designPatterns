import MenuComponent from './MenuComponent';
import MenuIterator from './UnrealtedToExample/MenuIterator';

export default class Menu extends MenuComponent {
  name: string;
  description: string;
  iterator: MenuIterator;

  constructor(name: string, description: string) {
    super();
    this.name = name;
    this.description = description;
    this.iterator = new MenuIterator();
  }

  add(component: MenuComponent) {
    this.iterator.menuComponents.push(component);
  }
  remove(component: MenuComponent) {
    this.iterator.menuComponents = this.iterator.menuComponents.filter(
      c => c !== component
    );
  }
  child(component: MenuComponent): MenuComponent {
    return this.iterator.menuComponents.filter(c => c === component)[0];
  }

  print() {
    console.log(`${this.name}, ${this.description}\n`);

    // This bellow is the key here in composite as we are potentially
    // dealing with looping over an entire tree here, as one of the sub
    // items could also be another menu and that would mean we would iterate
    // over it again and call print on all the sub items sub items ...

    // use the iterator pattern here to loop through the items in the menu
    while (this.iterator.hasNext()) {
      // print all the items in the sub menu item (could also be another menu)
      this.iterator.next().print();
    }
  }
}
