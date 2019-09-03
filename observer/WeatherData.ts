import Subject from './Subject';
import Observer from './Observer';

export default class WeatherData implements Subject {
  // internal state of the observer
  observers: Observer[] = [];
  temp!: number;
  humidity!: number;
  pressure!: number;

  // Implement the subject as this is the subject in the observer pattern
  registerObserver(observer: Observer) {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer) {
    this.observers = this.observers.filter(ob => ob !== observer);
  }

  notifyObservers() {
    this.observers.forEach(ob => {
      ob.update(this.temp, this.humidity, this.pressure);
    });
  }

  // Stuff that just comes with the weather data
  getTemperature() {
    // ...
  }

  getHumidity() {
    // ...
  }

  getPressure() {
    // ...
  }

  measurementsChanged() {
    this.notifyObservers();
  }

  setMeasurements(temp: number, humidity: number, pressure: number) {
    this.temp = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}
