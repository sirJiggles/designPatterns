import ICommand from './ICommand';
import ILight from '../Devices/ILight';

export default class LightOnCommand implements ICommand {
  light: ILight;

  constructor(light: ILight) {
    this.light = light;
  }

  execute() {
    this.light.on();
  }
}
