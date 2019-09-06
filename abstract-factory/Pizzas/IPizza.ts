import IPizzaIngredientFactory from '../Ingredients/IPizzaIngredientFactory';

export default interface IPizza {
  prepare(): void;
  bake(): void;
  cut(): void;
  box(): void;
  name: string;
  ingredientFactory: IPizzaIngredientFactory;
  dough: string;
  source: string;
}
