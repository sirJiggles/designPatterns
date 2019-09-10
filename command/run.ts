import Remote from './Remote';
import LightOnCommand from './Commands/LightOnCommand';
import Light from './Devices/Light';
import GarageDoor from './Devices/GarageDoor';
import OpenGarageCommand from './Commands/OpenGarageCommand';

const remote = new Remote();
const light = new Light();
const command = new LightOnCommand(light);
remote.setCommand(command);

remote.buttonWasPressed();

// now we are going to set the command to be open the garage door
const garageDoor = new GarageDoor();
const commandTwo = new OpenGarageCommand(garageDoor);

remote.setCommand(commandTwo);
remote.buttonWasPressed();
