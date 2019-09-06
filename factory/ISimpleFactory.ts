import IPizza from './IPizza';

export default interface ISimpleFactory {
  createPizza(type: string): IPizza;
}
