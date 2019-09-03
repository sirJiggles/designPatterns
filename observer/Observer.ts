export default interface Observer {
  update(temp: number, humidity: number, pressure: number): void;
}
