import Observer from '../Observer';
import DisplayElement from './DisplayElement';
import WeatherData from '../WeatherData';

export default class Forecast implements Observer, DisplayElement {
  temp!: number;
  humidity!: number;
  subject: WeatherData;

  constructor(weatherData: WeatherData) {
    this.subject = weatherData;
    this.subject.registerObserver(this);
  }

  update(temp: number, humidity: number): void {
    this.temp = temp;
    this.humidity = humidity;
    this.display();
  }

  display(): void {
    console.log(
      `Forecasted conditions: temp: ${this.temp + 2}, humidity: ${this
        .humidity - 2}`
    );
  }
}
