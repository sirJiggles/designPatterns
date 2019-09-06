import IPizzaIngredientFactory from './IPizzaIngredientFactory';
import Ingredient from './IIngredient';
import ThicCrustDough from './ThicDough';
import Pesto from './Pesto';

export default class JoesIngredientFactory implements IPizzaIngredientFactory {
  createDough(): Ingredient {
    return new ThicCrustDough();
  }
  createSauce(): Ingredient {
    return new Pesto();
  }
}
