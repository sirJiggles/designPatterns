import Singleton from './Singleton';

console.log('Lets get an instance of singleton');

const single = Singleton.getInstance();

console.log(`Value of boolean class prop: ${single.isOpen}`);

console.log('get the instance in another variable');

const singleTwo = Singleton.getInstance();

console.log('set the boolean to true on the second variable');

singleTwo.isOpen = true;

console.log(`value of bool on first instance: ${single.isOpen}`);
console.log(`value of bool on second instance: ${singleTwo.isOpen}`);

// They are both the same as they both point to the same instance
// you can also try un-comment the following that should throw an error
// const third = new Singleton();
