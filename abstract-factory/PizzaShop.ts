import ILocationFactory from './Locations/ILocationFactory';

export default class PizzaShop {
  factory: ILocationFactory;

  constructor(factory: ILocationFactory) {
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
