import MenuComponent from './MenuComponent';

export default class MenuItem extends MenuComponent {
  name: string;
  description: string;
  vegetarian: boolean;
  price: number;

  constructor(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    super();
    this.name = name;
    this.description = description;
    this.vegetarian = vegetarian;
    this.price = price;
  }

  print() {
    // if is vegie add it to the end
    const vegie = this.vegetarian ? ` , (v)` : '';
    console.log(
      `${this.name}: ${this.description}, price: ${this.price}${vegie}\n`
    );
  }
}
