import { Component, OnInit, OnDestroy, ViewChild, Renderer2, ElementRef, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Address, Contact, Dropdown } from 'lick-data';
import { DropdownService, TypeFindService, ADDRESSES } from 'licky-services';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
import { Subscription } from 'rxjs';
import { MapsAPILoader } from '@agm/core';


@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  public latitude: number;

  public longitude: number;

  public searchControl: FormControl;

  private autocomplete;

  public zoom: number;

  address: Address = new Address();

  states: Dropdown[];

  addressTypes: Dropdown[];

  private _paramSubscription: Subscription;

  private _addressSubscription: Subscription;

  private _contactSubscription: Subscription;

  contact_id;

  contact: Contact;

  @ViewChild("search")

  public searchElementRef: ElementRef;
  // Data to edit
  styles = [
    {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#444444"
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
        {
          "color": "#f2f2f2"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "all",
      "stylers": [
        {
          "color": "#cbf3cb"
        },
        {
          "visibility": "on"
        },
        {
          "saturation": "0"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
        {
          "saturation": "-100"
        },
        {
          "lightness": "20"
        },
        {
          "gamma": "1.50"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "simplified"
        },
        {
          "lightness": "-13"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
        {
          "color": "#7faddc"
        },
        {
          "visibility": "on"
        }
      ]
    }
  ];

  constructor(public dm: DataMediationService,
    protected renderer2: Renderer2,
    public router: Router,
    public typeFindService: TypeFindService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private _dropdownService: DropdownService,
    private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this.initializeDropdowns();
    this._route.data
      .subscribe((data: { address: Address }) => {
        if (data.address) {
          this.address = data.address;
          this.contact_id = this.address.contact_id
          this.setContactContext();
        }
      });
    this.setUpGoogleSearch();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._paramSubscription)
      this._paramSubscription.unsubscribe();
    if (this._contactSubscription)
      this._contactSubscription.unsubscribe();
    if (this._addressSubscription)
      this._addressSubscription.unsubscribe();
  }

  onSubmit(): void {
    (this.address.id ? this.onUpdate() : this.saveNewAddress());
    this.router.navigate(['/application/contacts/' + this.contact_id + "/addresses"]);
  }

  onUpdate(): void {
    this.dm.db.updateData(ADDRESSES + "/" + this.contact_id, this.address.id, this.address);
  }

  onDelete(): void {
    this.address.deleted = true;
    this.onUpdate();
    this.onBrandNew();
  }

  saveNewAddress(): void {
    this.dm.db.writeData(ADDRESSES + "/" + this.contact_id, this.address).subscribe((key) => {
      this.address.id = key;
      console.info("ADDRESS AFTER SAVE", this.address, "KEY IS", key)
    });
  }

  onBrandNew(): void {
    this.address = new Address();
  }


  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/contacts/dashboard", active: false },
      { name: "contacts", link: "/application/contacts", active: false },
      { name: this.contact.firstName + " " + this.contact.lastName, link: "/application/contacts/" + this.contact.id, active: false },
      { name: "address", link: "/application/contacts/" + this.contact_id + "/addresses", active: false },
      { name: "new", link: "/application/contacts/" + this.contact_id + "/addresses/new", active: true },
    ]
  }

  private setContactContext(): void {
    if (this._route.snapshot.params['id']) {
      this.contact_id = this._route.snapshot.params['id'];
      this._paramSubscription = this._route.params.subscribe(
        (params: Params) => {
          this.contact_id = this._route.snapshot.params['id'];
        });
      this.setContact();
    }
  }

  private setContact(): void {
    this.dm.doContact(this.contact_id);
    this.dm.contact.subscribe((contact) => {
      this.contact = contact;
      this.setBreadCrumb();
    })
  }

  private initializeDropdowns(): void {
    this.states = this._dropdownService.getStates();
    this.addressTypes = this._dropdownService.getAddressTypes();
  }

  private setUpGoogleSearch(): void {
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });

      this.autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = this.autocomplete.getPlace();
          this.fillInAddress(place);
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.address.latitude = this.latitude;
          this.address.longitude = this.longitude;
          this.zoom = 12;

        });
      });
    });

  }

  /**
   * When user selects address fill in all the database fields
   * @function
   * @private
   */
  private fillInAddress(place): void {
    this.address.streetAddress = '';

    for (var i = 0; i < place.address_components.length; i++) {
      let addressType = place.address_components[i].types[0];
      var val = place.address_components[i];
      if (addressType === 'administrative_area_level_2') {
        this.address.county = place.address_components[i].long_name;
      }
      if (addressType === 'administrative_area_level_1') {
        this.address.state = place.address_components[i].long_name;
      }
      if (addressType === 'route') {
        this.address.streetAddress += place.address_components[i].long_name;
      }
      if (addressType === 'street_number') {
        this.address.streetAddress += place.address_components[i].long_name + ' ';
      }
      if (addressType === 'locality') {
        this.address.city = place.address_components[i].long_name;
      }
      if (addressType === 'country') {
        this.address.country = place.address_components[i].long_name;
      }
      if (addressType === 'postal_code') {
        this.address.zip = place.address_components[i].long_name;
      }

    }

  }

  /**
   * Set the map to the current position of the user
   * @function
   * @private
   */
  private setCurrentPosition() {
    if (this.address.longitude && this.address.latitude) {
      this.latitude = this.address.latitude;
      this.longitude = this.address.longitude;
      this.zoom = 12;
    } else if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  get diagnostic() {
    return JSON.stringify(this.address, null, 2)
      + ", contact_id=" + this.contact_id
      + ", CONTACT=" + JSON.stringify(this.contact, null, 2)
  }


}
