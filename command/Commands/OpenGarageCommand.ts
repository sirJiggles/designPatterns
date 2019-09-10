import ICommand from './ICommand';
import IGarageDoor from '../Devices/IGarageDoor';

export default class OpenGarageCommand implements ICommand {
  door: IGarageDoor;

  constructor(door: IGarageDoor) {
    this.door = door;
  }

  execute() {
    this.door.up();
  }
}
