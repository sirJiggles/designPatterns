import GumballMachine from './GumballMachine';

const machine = new GumballMachine(20);
// try to break it
machine.ejectCoin();
machine.insertCoin();
machine.turnCrank();

// how many do we now have
console.log(`we have ${machine.count} balls in the machine now\n`);

machine.insertCoin();
machine.ejectCoin();
machine.insertCoin();
machine.turnCrank();

console.log(`we have ${machine.count} balls in the machine now\n`);

// feel free to play with the machine here and try to debug the state of the machine
