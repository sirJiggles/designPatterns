import ICommand from './Commands/ICommand';

export default class Remote {
  slot!: ICommand;

  setCommand(command: ICommand) {
    this.slot = command;
  }

  // execute the command that is currently in the slot
  // on the remote
  buttonWasPressed() {
    this.slot.execute();
  }
}
