import IState from './States/IState';
import SoldOutState from './States/SoldOutState';
import SoldState from './States/SoldState';
import NoCoinState from './States/NoCoinState';
import HasCoinState from './States/HasCoinState';

export default class GumballMachine implements IState {
  // the types of state this machine can have
  soldOutState: IState;
  noCoinState: IState;
  hasCoinState: IState;
  soldState: IState;

  // start state
  state: IState;

  count = 0;

  constructor(count: number) {
    this.count = count;

    // make instances of our state classes
    this.soldOutState = new SoldOutState(this);
    this.soldState = new SoldState(this);
    this.noCoinState = new NoCoinState(this);
    this.hasCoinState = new HasCoinState(this);

    // by default we are in the sold out state
    this.state = this.soldOutState;

    // if there is something in the machine then we go to noCoin state
    if (count > 0) {
      this.state = this.noCoinState;
    }
  }

  insertCoin() {
    this.state.insertCoin();
  }

  ejectCoin() {
    this.state.ejectCoin();
  }

  turnCrank(): void {
    this.state.turnCrank();
    this.dispense();
  }

  dispense(): void {
    this.state.dispense();
    // reduce the amount we have in the machine and set to the 'start state'
    // or the sold out state depending on the amount left, this is after the
    // state class did whatever it needs to do to 'dispense'
    this.count -= 1;
    if (this.count > 0) {
      this.state = this.noCoinState;
    } else {
      this.state = this.soldOutState;
    }
  }
}
