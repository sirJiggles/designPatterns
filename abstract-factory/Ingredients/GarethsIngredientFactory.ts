import IPizzaIngredientFactory from './IPizzaIngredientFactory';
import Ingredient from './IIngredient';
import ThinCrustDough from './ThinCrustDough';
import TomatoSauce from './TomatoSauce';

export default class GarethsIngredientFactory
  implements IPizzaIngredientFactory {
  createDough(): Ingredient {
    return new ThinCrustDough();
  }
  createSauce(): Ingredient {
    return new TomatoSauce();
  }
}
