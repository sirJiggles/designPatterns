import IPizza from './IPizza';

export default class Pizza implements IPizza {
  name!: string;

  prepare(): void {
    console.log(`preparing pizza: ${this.name}`);
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
