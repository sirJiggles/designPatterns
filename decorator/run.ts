import Espresso from './Beverages/Espresso';
import Milk from './Condements/Milk';
import Mocha from './Condements/Mocha';

const coffeeOne = new Espresso();
const coffeeOneWithMilk = new Milk(coffeeOne);
const mochaChoca = new Mocha(coffeeOneWithMilk);

console.log(mochaChoca.getDescription());
console.log(mochaChoca.cost());
