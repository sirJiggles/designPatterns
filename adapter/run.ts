import Duck from './Birds/Duck';
import Turkey from './Birds/Turkey';
import TurkeyToDuckAdapter from './Adapters/TurkeyToDuck';

const duck = new Duck();

console.log('this is the duck');
duck.fly();
duck.quack();

console.log('\n');

console.log('now we make a turkey');
const turkey = new Turkey();
turkey.fly();
turkey.gobble();

console.log('\n');

console.log(
  'now we make an instance of the adapter to make the turkey a duck :D'
);
const t2d = new TurkeyToDuckAdapter(turkey);
t2d.fly();
t2d.quack();
