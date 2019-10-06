import GumballMachine from '../GumballMachine';

export default interface IState {
  gumballMachine?: GumballMachine;
  // every state will do different things when these functions are called
  // for example ejectCoin will do one thing when the machine is in one state
  // and another when for example a coin is not there.
  insertCoin(): void;
  ejectCoin(): void;
  turnCrank(): void;
  dispense(): void;
}
