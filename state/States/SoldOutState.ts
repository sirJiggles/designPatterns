import IState from './IState';
import GumballMachine from '../GumballMachine';

export default class SoldOutState implements IState {
  gumballMachine: GumballMachine;

  constructor(machine: GumballMachine) {
    this.gumballMachine = machine;
  }

  insertCoin(): void {
    console.log('cannot insert coin we are sold out\n');
  }
  ejectCoin(): void {
    console.log('could not insert coin in sold out state\n');
  }
  turnCrank(): void {
    console.log('no need to turn the crank, are sold out\n');
  }
  dispense(): void {
    console.log('nothing to dispense, sold out\n');
  }
}
