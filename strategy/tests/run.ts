import RubberDuck from '../Ducks/RubberDuck';

const rubberDuck = new RubberDuck();

console.log('Test rubber duck:');
console.log('can you fly?');
rubberDuck.performFly();
console.log('can you quack?');
rubberDuck.performQuack();
