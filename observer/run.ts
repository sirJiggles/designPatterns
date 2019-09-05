import WeatherData from './WeatherData';
import CurrentConditions from './Displays/CurrentConditions';
import Forecast from './Displays/Forecast';
import Statistics from './Displays/Statistics';

const weatherData = new WeatherData();

// get all of our displays up and running and subscribe to the weather data :D
const currentDisplay = new CurrentConditions(weatherData);
const forecastDisplay = new Forecast(weatherData);
const statsDisplay = new Statistics(weatherData);

console.log('Weather station 5000');
console.log('');
weatherData.setMeasurements(12, 23, 33);
console.log('');
console.log('');
weatherData.setMeasurements(13, 22, 34);
console.log('');
console.log('');
console.log('lets un-sub the stats display');
console.log('');
weatherData.removeObserver(statsDisplay);
weatherData.setMeasurements(34, 45, 56);
console.log('');
console.log('');
console.log('lets re-sub the stats display');
console.log('');
weatherData.registerObserver(statsDisplay);
weatherData.setMeasurements(44, 2, 1);
