import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { DataMediationService } from '../../../../shared/services/data-mediation.service';
import { Observable, Subscription } from 'rxjs';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Offer, Store, Catalog } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { OFFERS } from 'licky-services';


@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  store_id;

  store: Store;

  catalog_id;

  catalog: Catalog;

  data$: Observable<any[]>;

  private _offers: Offer[];

  private _offersOriginal;

  pageSize = 5;

  totalRecords = 0;

  private _searchArgumentSubscription: Subscription;

  private _offerSubscription: Subscription;

  private _paramSubscription: Subscription;

  searchArgument = '';

  deletedOffers: number = 0;
  sharedOffers: number = 0;
  draftOffers: number = 0;
  uploadOffers: number = 0;

  constructor(public dm: DataMediationService, protected renderer2: Renderer2, public router: Router, private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this.setStoreContext();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._searchArgumentSubscription)
      this._searchArgumentSubscription.unsubscribe();
    if (this._offerSubscription)
      this._offerSubscription.unsubscribe();
  }

  private setStoreContext(): void {
    if (this._route.snapshot.params['id']) {
      this.store_id = this._route.snapshot.params['id'];
      this.catalog_id = this._route.snapshot.params['id2'];
      this._paramSubscription = this._route.params.subscribe(
        (params: Params) => {
          this.store_id = this._route.snapshot.params['id'];
          this.catalog_id = this._route.snapshot.params['id2'];
        });
      this.setStore();
      this.setOffers();
    }
  }

  private setStore(): void {
    this.dm.doStore(this.store_id);
    this.dm.store.subscribe((store) => {
      this.store = store;
      this.setCatalog();
    })
  }

  private setCatalog(): void {
    this.dm.doCatalog(this.store_id, this.catalog_id);
    this.dm.catalog.subscribe((catalog) => {
      this.catalog = catalog;
      this.setBreadCrumb();
    })
  }

  private doDataMassage(offers: Offer[]): void {
    this.data$ = Observable.create((observer) => {
      if (this.isSearch()) {
        this.setSearchResult();
        observer.next(this.dm.db.getRecordsToDisplay(1, this.pageSize, this._offers));
      }
      else
        observer.next(this.dm.db.getRecordsToDisplay(1, this.pageSize, offers));

      observer.complete();
    })

  }

  private setSearchResult(): void {
    if (this.searchArgument != '')
      this._offers = this._offersOriginal.filter(
        (offer) => {
          return ((offer.name && (offer.name.toLowerCase().indexOf(this.searchArgument) >= 0)) )
        });
    else
      this._offers = this._offersOriginal;
  }

  private isSearch(): boolean {
    if (this._route.snapshot.queryParams['searchArgument']) {
      this.searchArgument = this._route.snapshot.queryParams['searchArgument'];
      this._searchArgumentSubscription = this._route.queryParams.subscribe(
        (params: Params) => {
          this.searchArgument = this._route.snapshot.queryParams['searchArgument'];
        }
      )
      return true;
    }
    return false;
  }

  private setCounts(offers: Offer[]): void {
    this.dm.sortHelper.sortByName(offers);
    this._offers = offers;
    this._offersOriginal = offers;
    this.totalRecords = offers.length;
    this.deletedOffers = offers.filter((offer) => offer.deleted).length;
    this.sharedOffers = offers.filter((offer) => offer.shared).length;
    this.draftOffers = offers.filter((offer) => offer.draft).length;
    this.uploadOffers = offers.filter((offer) => (offer && offer.url)).length;
  }

  private setOffers(): void {
    this.dm.doOffers(this.store_id);
    this._offerSubscription = this.dm.offers.subscribe((offers: Offer[]) => {
      if (offers) {
        this.totalRecords = offers.length;
        this.setCounts(offers);
        this.doDataMassage(offers);
        this._offers = offers;
        this.newPage(1);
      }
    })
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/dashboard", active: false },
      { name: this.store.name, link: "/application/stores/" + this.store_id, active: false },
      { name: this.catalog.name, link: "/application/stores/" + this.store_id + "/catalogs/" + this.catalog_id, active: false },
      { name: "offers", link: "/application/stores/" + this.store_id + "/catalogs/" + this.catalog_id + "/offers", active: false },
      { name: "new", link: "/application/stores/" + this.store_id + "/catalogs/" + this.catalog_id + "/offers/new", active: false },
    ]
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onNewItem() : void {
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs', this.catalog_id, 'offers', 'new']);
  }

  newPage(value: number): void {
    this.data$ = Observable.create((observer) => {
      let offers = this.dm.db.getRecordsToDisplay(value, this.pageSize, this._offers);
      observer.next(offers);
      observer.complete();
    })
  }

  onDetail(data): void {
    console.log(JSON.stringify(data))
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs', this.catalog_id, 'offers',  data.id])
  }

  onEdit(data): void {
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs', this.catalog_id, 'offers', data.id, 'edit'])
  }

  onDelete(data): void {
    this.dm.db.setDeleted(OFFERS + "/" + this.store_id, data.id, data);
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs', this.catalog_id, 'offers',  data.id])
  }

  onSearch(value) : void {
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs', this.catalog_id, 'offers'], {queryParams: { searchArgument: value}})
  }

  get diagnostic() {
    return "Offers=" + JSON.stringify( this._offers);
  }

}
