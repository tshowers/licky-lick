export class Weather {
  public cityName?: string
  public country?: string;
  public zip: string;
  public coord: Coordinates;
  public weatherDescription: WeatherDescription;
  public base: string;
  public main: WeatherMain;
  public visibility: number;
  public wind: Wind;
  public clouds: Clouds;
  public dt: number;
  public sys: Sys;
  public id: string;
  public name: string;
  public cod: number;
}

export interface Coordinates {
  lon: number;
  lat: number;
}

export interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherMain {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export interface Wind {
  speed: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  message: number;
  country: number;
  sunrise: number;
  sunset: number;
}
