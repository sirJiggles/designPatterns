import IPizza from './IPizza';
import IPizzaIngredientFactory from '../Ingredients/IPizzaIngredientFactory';

export default class Pizza implements IPizza {
  name!: string;
  dough!: string;
  source!: string;
  ingredientFactory: IPizzaIngredientFactory;

  constructor(factory: IPizzaIngredientFactory) {
    this.ingredientFactory = factory;
  }

  prepare(): void {
    console.log(`preparing pizza: ${this.name}`);
    this.dough = this.ingredientFactory.createDough().name;
    this.source = this.ingredientFactory.createSauce().name;
    console.log(`with: ${this.dough} and ${this.source} source`);
  }

  bake(): void {
    console.log(`baking the pizza: ${this.name}`);
  }
  cut(): void {
    console.log(`cutting the pizza: ${this.name}`);
  }
  box(): void {
    console.log(`boxing the pizza ${this.name}`);
  }
}
