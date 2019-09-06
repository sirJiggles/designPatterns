import PizzaShop from './PizzaShop';
import JoesFactory from './Locations/JoesFactory';
import GarethsFactory from './Locations/GarethsFactory';

// The factory handles the making of the pizza it does not care how it is called
// also we can use another type of factory in another store if we wanted to branch out
// at some point

console.log('\n');
console.log('Making a new Pizza factory Joes:');

const factory = new JoesFactory();
// the shop has the ref to the type of factory it is using as it is passed it
const shop = new PizzaShop(factory);

console.log('\n');
console.log('Joes cheese pizza:');
shop.orderPizza('cheese');
console.log('\n');
console.log('Joes peperoni Pizza:');
shop.orderPizza('peperoni');

console.log('\n');
console.log('making another pizza place, Gareths');
const garfs = new GarethsFactory();
const garfsShop = new PizzaShop(garfs);

console.log('\n');
console.log('Gareths cheese pizza:');
garfsShop.orderPizza('cheese');
console.log('\n');
console.log('Gareths peperoni Pizza:');
garfsShop.orderPizza('peperoni');
