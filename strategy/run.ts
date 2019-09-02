// just run tsc in terminal to compile app to dist folder then
// node the run.js file for the output

import RubberDuck from './Ducks/RubberDuck';
import RegularDuck from './Ducks/RegularDuck';

console.log('Test rubber duck:');
const rubberDuck = new RubberDuck();

console.log('can you fly?');
rubberDuck.performFly();
console.log('can you quack?');
rubberDuck.performQuack();

console.log('Test regular duck:');
const regularDuck = new RegularDuck();

console.log('can you fly?');
regularDuck.performFly();
console.log('can you quack?');
regularDuck.performQuack();
