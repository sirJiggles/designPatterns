import MenuComponent from './MenuComponent';

export default interface IMenuComponent {
  name: string;
  description: string;
  vegetarian: boolean;
  price: number;
  child(component: MenuComponent): MenuComponent;
  add(component: MenuComponent): void;
  remove(component: MenuComponent): void;
  print(): void;
}
