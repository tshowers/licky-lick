import { Injectable } from '@angular/core';
import { Address } from 'lick-data';
import { MapsAPILoader } from '@agm/core';
import { Subject, BehaviorSubject } from 'rxjs';

declare let google: any;

@Injectable({
  providedIn: 'root'
})
export class UserLocationService {

  private  google: any;

  private _geocoder;

  public address = new BehaviorSubject<Address>(null);

  constructor(private _mapsAPILoader: MapsAPILoader) {
    this._mapsAPILoader.load().then(() => {
      this._geocoder = new google.maps.Geocoder();
      this.setCurrentPosition();
    })
  }

  private setCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        this.setCityState(latitude, longitude);
      });
    }
  }

  private setCityState(latitude, longitude): void {
    let latlng = new google.maps.LatLng(latitude, longitude);
    this._geocoder.geocode({latLng: latlng}, (addressResult, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        this.fillInAddress(addressResult[0], latitude, longitude);

      }
    })
  }


  private fillInAddress(place, latitude, longitude): void {
    let componentCount = place.address_components.length;
    let addr = new Address();
    addr.longitude = longitude;
    addr.latitude = latitude;
    for (var i = 0; i < componentCount; i++) {
      let addressType = place.address_components[i].types[0];
      if (addressType === 'administrative_area_level_2')
        addr.county = place.address_components[i].long_name;
      else if (addressType === 'administrative_area_level_1')
        addr.state = place.address_components[i].long_name;
      else if (addressType === 'route')
        addr.streetAddress += place.address_components[i].long_name;
      else if (addressType === 'street_number')
        addr.streetAddress += place.address_components[i].long_name + ' ';
      else if (addressType === 'locality')
        addr.city = place.address_components[i].long_name;
      else if (addressType === 'country')
        addr.country = place.address_components[i].long_name;
      else if (addressType === 'postal_code')
        addr.zip = place.address_components[i].long_name;
    }
    this.address.next(addr);
  }
}
