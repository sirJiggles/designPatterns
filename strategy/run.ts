// just run tsc in terminal to compile app to dist folder then
// node the run.js file for the output

import RubberDuck from './Ducks/RubberDuck';

const rubberDuck = new RubberDuck();

console.log('Test rubber duck:');
console.log('can you fly?');
rubberDuck.performFly();
console.log('can you quack?');
rubberDuck.performQuack();
