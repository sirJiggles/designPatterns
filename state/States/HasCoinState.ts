import IState from './IState';
import GumballMachine from '../GumballMachine';

export default class HasCoinState implements IState {
  gumballMachine: GumballMachine;

  constructor(machine: GumballMachine) {
    this.gumballMachine = machine;
  }

  insertCoin(): void {
    console.log('cannot insert another coin just yet\n');
  }
  ejectCoin(): void {
    this.gumballMachine.state = this.gumballMachine.noCoinState;
    console.log('returning coin\n');
  }
  turnCrank(): void {
    this.gumballMachine.state = this.gumballMachine.soldState;
    console.log('ejecting gumball\n');
  }
  dispense(): void {
    console.log(
      'cannot dispense from this state, you are looking for the sold state for that\n'
    );
  }
}
