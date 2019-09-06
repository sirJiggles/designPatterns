import PizzaShop from './PizzaShop';
import JoesFactory from './JoesFactory';

// The factory handles the making of the pizza it does not care how it is called
// also we can use another type of factory in another store if we wanted to branch out
// at some point
const factory = new JoesFactory();
// the shop has the ref to the type of factory it is using as it is passed it
const shop = new PizzaShop(factory);

shop.orderPizza('cheese');
shop.orderPizza('peperoni');
