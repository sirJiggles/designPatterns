import Remote from './Remote';
import LightOnCommand from './Commands/LightOnCommand';
import Light from './Devices/Light';

const remote = new Remote();
const light = new Light();
const command = new LightOnCommand(light);
remote.setCommand(command);

remote.buttonWasPressed();
