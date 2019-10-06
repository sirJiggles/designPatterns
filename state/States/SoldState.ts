import IState from './IState';
import GumballMachine from '../GumballMachine';

export default class SoldState implements IState {
  gumballMachine: GumballMachine;

  constructor(machine: GumballMachine) {
    this.gumballMachine = machine;
  }

  insertCoin(): void {
    console.log('wait a moment we are selling the previous gumball\n');
  }
  ejectCoin(): void {
    console.log('to late to eject the crank has been turned\n');
  }
  turnCrank(): void {
    console.log('no need to turn the crank again, it worked the first time\n');
  }
  dispense(): void {
    console.log('gumball dispensed, enjoy it you filfy animal!\n');
  }
}
