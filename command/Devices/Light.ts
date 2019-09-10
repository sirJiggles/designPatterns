import ILight from './ILight';

export default class Light implements ILight {
  on() {
    console.log('turn me on baby');
  }
  off() {
    console.log('nawwww you turned me off :/');
  }
}
