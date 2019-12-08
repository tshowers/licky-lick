import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Offer, Store, Catalog } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { OFFERS } from 'licky-services';
import { DataMediationService } from '../../../../shared/services/data-mediation.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-offer-view',
  templateUrl: './offer-view.component.html',
  styleUrls: ['./offer-view.component.css']
})
export class OfferViewComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  offer: Offer;

  canEdit = true;

  canDelete = true;

  searchArgument;

  private _paramSubscription: Subscription;

  private _storeSubscription: Subscription;

  store_id;

  store: Store;

  catalog_id;

  catalog: Catalog;

  constructor(public dm: DataMediationService, protected renderer2: Renderer2,
    public router: Router,
    private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this._route.data
      .subscribe((data: { offer: Offer }) => {
        this.offer = data.offer;
        this.store_id = this.offer.store_id
        this.setCatalogContext();
        this.searchArgument = this.offer.name;
      });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._paramSubscription)
      this._paramSubscription.unsubscribe();
    if (this._storeSubscription)
      this._storeSubscription.unsubscribe();
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/dashboard", active: false },
      { name: this.store.name, link: "/application/stores/" + this.store_id, active: false },
      { name: this.catalog.name, link: "/application/stores/" + this.store_id + "/catalogs/" + this.catalog_id, active: false },
      { name: "offers", link: "/application/stores/" + this.store_id + "/catalogs/" + this.catalog_id + "/offers", active: false },
      { name: this.offer.name, link: "/application/stores/" + this.store_id + "/catalogs/" + this.catalog_id + "/offers/" + this.offer.id, active: true },
      { name: "new", link: "/application/stores/" + this.store_id + "/catalogs/" + this.catalog_id + "/offers/new", active: false },
    ]
  }

  private setCatalogContext(): void {
    if (this._route.snapshot.params['id2']) {
      this.catalog_id = this._route.snapshot.params['id2'];
      this._paramSubscription = this._route.params.subscribe(
        (params: Params) => {
          this.catalog_id = this._route.snapshot.params['id2'];
        });
      this.setStore();
      this.setCatalog();
    }
  }

  private setStore(): void {
    this.dm.doStore(this.store_id);
    this.dm.store.subscribe((store) => {
      this.store = store;
    })
  }

  private setCatalog(): void {
    this.dm.doCatalog(this.catalog_id);
    this.dm.store.subscribe((catalog) => {
      this.catalog = catalog;
      this.setBreadCrumb();
    })
  }



  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onEdit() {
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs', this.catalog_id, 'offers', this.offer.id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'top' });
  }

  onDelete() {
    this.offer.deleted = true;
    this.dm.db.updateData(OFFERS, this.offer.id, this.offer);
    this.router.navigate(['application', 'offers']);
  }

  onSearch(value): void {
    console.log("ONSEARCH", value);
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs', this.catalog_id, 'offers'], { queryParams: { searchArgument: value } })
  }

  get diagnostic() {
    return JSON.stringify(this.offer, null, 2)
  }

}
