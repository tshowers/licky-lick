import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Weather } from 'lick-data';

const OPEN_WEATHER_API_KEY = 'a369f9652772924c28c1dba757222395';
const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';


@Injectable()
export class WeatherService {
  weatherHasChanged = new Subject<Weather>();

  constructor(private http: HttpClient) { }

  getWeatherData(weather: Weather): Observable<any> {
    return this.http.get(OPEN_WEATHER_URL + 'q=' + weather.cityName + ',' + weather.country + '&APPID=' + OPEN_WEATHER_API_KEY + '&units=Imperial', {responseType: 'json'} )
  }

  getWeatherByLonLat(lon, lat): Observable<any> {
    let url = OPEN_WEATHER_URL + 'lat=' + lat + '&lon=' + lon + '&APPID=' + OPEN_WEATHER_API_KEY + '&units=Imperial';
    // console.log(url);
    return this.http.get(url, {responseType: 'json'})
  }

  getNew(): Weather {
    let weather = new Weather();
    return weather;
  }

}