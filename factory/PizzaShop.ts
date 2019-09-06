import ISimpleFactory from './ISimpleFactory';

export default class PizzaShop {
  factory: ISimpleFactory;

  constructor(factory: ISimpleFactory) {
    this.factory = factory;
  }

  orderPizza(type: string) {
    // the creation of the pizza is simply abstracted away into
    // another place
    const pizza = this.factory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
  }
}
