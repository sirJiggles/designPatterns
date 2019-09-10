import IGarageDoor from './IGarageDoor';

export default class GarageDoor implements IGarageDoor {
  lightOn(): void {
    throw new Error('Method not implemented.');
  }
  lightOff(): void {
    throw new Error('Method not implemented.');
  }
  up(): void {
    console.log('we are opening the garage door');
  }
  down(): void {
    throw new Error('Method not implemented.');
  }
  stop(): void {
    throw new Error('Method not implemented.');
  }
}
