import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject, BehaviorSubject } from 'rxjs';
import { Weather } from 'lick-data';

const OPEN_WEATHER_API_KEY = 'a369f9652772924c28c1dba757222395';
const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';


@Injectable()
export class WeatherService {
  weatherHasChanged = new BehaviorSubject<Weather>(null);

  constructor(private http: HttpClient) { }

  getWeatherData(weather: Weather): Observable<any> {
    return this.http.get(OPEN_WEATHER_URL + 'q=' + weather.cityName + ',' + weather.country + '&APPID=' + OPEN_WEATHER_API_KEY + '&units=Imperial', {responseType: 'json'} )
  }

  getWeatherByLonLat(lon, lat): Observable<any> {
    const url = OPEN_WEATHER_URL + 'lat=' + lat + '&lon=' + lon + '&APPID=' + OPEN_WEATHER_API_KEY + '&units=Imperial';
    return this.http.get(url, {responseType: 'json'})
  }

  getNew(): Weather {
    const weather = new Weather();
    return weather;
  }

}
