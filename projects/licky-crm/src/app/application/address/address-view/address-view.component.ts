import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Address, Contact } from 'lick-data';
import { ADDRESSES } from 'licky-services';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { DataMediationService } from '../../../shared/services/data-mediation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-address-view',
  templateUrl: './address-view.component.html',
  styleUrls: ['./address-view.component.css']
})
export class AddressViewComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  address: Address;

  contact: Contact;

  contact_id: string;

  zoom = 12;

  public latitude;

  public longitude;

  private _paramSubscription: Subscription;

  private _contactSubscription: Subscription;

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
    private _route: ActivatedRoute) {
      super(router, renderer2);
    }

  ngOnInit() {
    this._route.data
      .subscribe((data: { address: Address }) => {
        this.address = data.address;
        this.setContactContext();
        this.setMap();
      });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._paramSubscription)
      this._paramSubscription.unsubscribe();
    if (this._contactSubscription)
      this._contactSubscription.unsubscribe();
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/contacts/dashboard", active: false },
      { name: "contacts", link: "/application/contacts", active: false },
      { name: this.contact.firstName + " " + this.contact.lastName, link: "/application/contacts/" + this.contact.id, active: false },
      { name: "address", link: "/application/contacts/" + this.contact_id + "/addresses", active: false },
      { name: "view", link: "/application/contacts/" + this.contact_id + "/addresses/" + this.address.id, active: true },
    ]
  }

  onEdit(): void {
    this.router.navigate(['application', 'contacts', this.contact_id, 'addresses', this.address.id, 'edit']);
  }

  onDelete(): void {
    this.address.deleted = true;
    this.dm.db.updateData(ADDRESSES + "/" + this.contact_id, this.address.id, this.address);
    this.router.navigate(['application', 'contacts', this.contact_id, 'addresses']);
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

  private setMap() : void {
    try {
      this.latitude = this.address.latitude;
      this.longitude = this.address.longitude;
    } catch (err) {
      console.error(err);
    }
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  get diagnostic() {
    return JSON.stringify(this.address, null, 2)
    + ", latitude=" + this.latitude
    + ", longitude=" + this.longitude
      + ", contact_id=" + this.contact_id
      + ", CONTACT=" + JSON.stringify(this.contact, null, 2)
  }


}
