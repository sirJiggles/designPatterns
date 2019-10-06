import IState from './IState';
import GumballMachine from '../GumballMachine';

export default class NoCoinState implements IState {
  gumballMachine: GumballMachine;

  constructor(machine: GumballMachine) {
    this.gumballMachine = machine;
  }

  insertCoin(): void {
    // transition the state
    this.gumballMachine.state = this.gumballMachine.hasCoinState;
    console.log('thanks for the coin, gobble gobble gobble\n');
  }
  ejectCoin(): void {
    console.log('no coin inserted to be ejected\n');
  }
  turnCrank(): void {
    console.log('no coin inserted, le crank will not budge\n');
  }
  dispense(): void {
    console.log(
      'nothing to dispense, there is no coin (or spoon for that matter)\n'
    );
  }
}
