import { Component, OnInit, OnDestroy } from '@angular/core';
import { Address } from 'lick-data';
import { WeatherService, UserLocationService } from 'licky-services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'licky-lick-app-widget-weather',
  templateUrl: './lick-app-widget-weather.component.html',
  styles: []
})
export class LickAppWidgetWeatherComponent implements OnInit, OnDestroy {


  private _address: Address;

  weather: any;

  private _addressSubscription : Subscription;
  private _weatherSubscription : Subscription;

  constructor(private _weatherService: WeatherService, private _userLocationService: UserLocationService) {

  }

  ngOnInit() {
    this._addressSubscription = this._userLocationService.address.subscribe((address) => {
      console.log("Address :" + JSON.stringify(address));
      this._address = address;
      this.setWeather(address);
    })

  }

  ngOnDestroy() {
    if (this._addressSubscription)
      this._addressSubscription.unsubscribe();
    if (this._weatherSubscription)
      this._weatherSubscription.unsubscribe();
  }

  setWeather(address: Address) : void {
    this._weatherSubscription = this._weatherService.getWeatherByLonLat(address.longitude, address.latitude).subscribe((weather) => {
      console.log("Weather is :" + JSON.stringify(weather));
      this.weather = weather;
    })
  }


}
