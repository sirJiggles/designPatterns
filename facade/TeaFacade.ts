import IFridge from './Steps/IFridge';
import IKettle from './Steps/IKettle';
import IMilk from './Steps/IMilk';
import ITea from './Steps/ITea';

export default class TeaFacade {
  kettle: IKettle;
  milk: IMilk;
  tea: ITea;
  fridge: IFridge;

  constructor(kettle: IKettle, milk: IMilk, fridge: IFridge, tea: ITea) {
    this.kettle = kettle;
    this.fridge = fridge;
    this.milk = milk;
    this.tea = tea;
  }

  makeTea() {
    this.kettle.fillUp();
    this.kettle.boil();
    this.fridge.open();
    this.fridge.reachFor('milk');
    this.fridge.close();
    this.tea.getBag();
    // ALWAYS WATER BEFORE MILK!
    this.kettle.pour();
    this.milk.open();
    this.milk.pour();
    this.milk.close();
    this.fridge.open();
    this.fridge.putBack('milk');
    this.fridge.close();
    this.tea.stur();
    this.tea.sip();
  }
}
