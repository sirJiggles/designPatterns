import Pizza from '../Pizzas/IPizza';
import CheesePizza from '../Pizzas/CheesePizza';
import PineapplePizza from '../Pizzas/PineapplePizza';
import ILocationFactory from './ILocationFactory';
import JoesIngredientFactory from '../Ingredients/JoesIngredientFactory';

export default class JoesFactory implements ILocationFactory {
  // In the factory we just abstract away the creation of the concrete classes
  // into another smaller class with just that job, there could be a few reasons for
  // doing this for example it would make sense if called from more than one place
  ingredientsFactory = new JoesIngredientFactory();

  createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new CheesePizza(this.ingredientsFactory);
      case 'peperoni':
        return new PineapplePizza(this.ingredientsFactory);
      case 'pineapple':
        return new PineapplePizza(this.ingredientsFactory);
      default:
        return new CheesePizza(this.ingredientsFactory);
    }
  }
}
