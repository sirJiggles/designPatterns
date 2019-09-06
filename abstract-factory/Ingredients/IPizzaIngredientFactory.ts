import Ingredient from './IIngredient';

export default interface IPizzaIngredientFactory {
  createDough(): Ingredient;
  createSauce(): Ingredient;
}
