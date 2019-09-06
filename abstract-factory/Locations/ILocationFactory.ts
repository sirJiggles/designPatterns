import IPizza from '../Pizzas/IPizza';
import IPizzaIngredientFactory from '../Ingredients/IPizzaIngredientFactory';

export default interface ILocationFactory {
  ingredientsFactory: IPizzaIngredientFactory;
  createPizza(type: string): IPizza;
}
