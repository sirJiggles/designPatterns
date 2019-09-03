import Observer from '../Observer';
import DisplayElement from './DisplayElement';
import WeatherData from '../WeatherData';

export default class CurrentConditions implements Observer, DisplayElement {
  temp!: number;
  humidity!: number;
  subject: WeatherData;

  constructor(weatherData: WeatherData) {
    this.subject = weatherData;
  }

  

  update(temp: number, humidity: number, pressure: number): void {
    
    this.display();
  }
  display(): void {
    console.log(`Current conditions: ${}`)
  }
}
