import Espresso from './Beverages/Espresso';
import Milk from './Condements/Milk';
import Mocha from './Condements/Mocha';
import DarkRoast from './Beverages/DarkRoast';

const coffeeOne = new Espresso();
const coffeeOneWithMilk = new Milk(coffeeOne);
const mochaChoca = new Mocha(coffeeOneWithMilk);

console.log(mochaChoca.getDescription());
console.log(mochaChoca.cost());

const thing = new Mocha(new Milk(new DarkRoast()));

console.log('');
console.log('');

console.log(thing.getDescription());
console.log(thing.cost());
