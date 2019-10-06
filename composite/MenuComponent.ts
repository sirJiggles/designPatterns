import IMenuComponent from './IMenuComponent';

export default abstract class MenuComponent implements IMenuComponent {
  name!: string;
  description!: string;
  vegetarian!: boolean;
  price!: number;

  child(component: MenuComponent): MenuComponent {
    throw new Error('Method not implemented.');
  }
  add(component: MenuComponent): void {
    throw new Error('Method not implemented.');
  }
  remove(component: MenuComponent): void {
    throw new Error('Method not implemented.');
  }
  print(): void {
    throw new Error('Method not implemented.');
  }
}
