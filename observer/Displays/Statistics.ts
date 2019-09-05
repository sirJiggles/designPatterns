import Observer from '../Observer';
import DisplayElement from './DisplayElement';
import WeatherData from '../WeatherData';

export default class Statistics implements Observer, DisplayElement {
  temp!: number;
  humidity!: number;
  pressure!: number;
  subject: WeatherData;

  constructor(weatherData: WeatherData) {
    this.subject = weatherData;
    this.subject.registerObserver(this);
  }

  update(temp: number, humidity: number, pressure: number): void {
    this.temp = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

  display(): void {
    console.log(
      `Statistics: temp: ${this.temp}, humidity: ${this.humidity}, pressure: ${this.pressure}`
    );
  }
}
