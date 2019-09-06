import SimpleFactory from './ISimpleFactory';
import Pizza from './IPizza';
import CheesePizza from './Pizzas/CheesePizza';
import PineapplePizza from './Pizzas/PineapplePizza';

export default class JoesFactory implements SimpleFactory {
  // In the factory we just abstract away the creation of the concrete classes
  // into another smaller class with just that job, there could be a few reasons for
  // doing this for example it would make sense if called from more than one place

  createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new CheesePizza();
      case 'peperoni':
        return new PineapplePizza();
      case 'pineapple':
        return new PineapplePizza();
      default:
        return new CheesePizza();
    }
  }
}
