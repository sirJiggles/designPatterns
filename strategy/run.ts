// just run tsc in terminal to compile app to dist folder then
// node the run.js file for the output

import RubberDuck from './Ducks/RubberDuck';
import RegularDuck from './Ducks/RegularDuck';
import FlyWithWings from './FlyBehavior/FlyWithWings';

console.log('Test rubber duck:');
console.log('');
const rubberDuck = new RubberDuck();

console.log('can you fly?');
rubberDuck.performFly();
console.log('can you quack?');
rubberDuck.performQuack();
console.log('');

console.log('lets make you fly my little rubber duck');
// this is a run time modification of what would have been a concrete class using inheritance
rubberDuck.flyBehavior = new FlyWithWings();
console.log('NOW can you fly?');
rubberDuck.performFly();

console.log('');
console.log('');
console.log('Test regular duck:');
const regularDuck = new RegularDuck();

console.log('can you fly?');
regularDuck.performFly();
console.log('can you quack?');
regularDuck.performQuack();
