import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { DataMediationService } from '../../../../shared/services/data-mediation.service';
import { Observable, Subscription } from 'rxjs';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Store } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { STORES } from 'licky-services';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  data$: Observable<any[]>;

  private _stores: Store[];

  private _storesOriginal;

  pageSize = 5;

  totalRecords = 0;

  private _searchArgumentSubscription: Subscription;

  private _storeSubscription: Subscription;

  private _paramSubscription: Subscription;

  searchArgument = '';

  deletedStores: number = 0;
  sharedStores: number = 0;
  draftStores: number = 0;
  uploadStores: number = 0;

  constructor(public dm: DataMediationService, protected renderer2: Renderer2, public router: Router, private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this.setBreadCrumb();
    this.dm.doStores();
    this._storeSubscription = this.dm.stores.subscribe((stores: Store[]) => {
      if (stores) {
        this.setCounts(stores);
        this.doDataMassage(stores);
      }
    })

  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._searchArgumentSubscription)
      this._searchArgumentSubscription.unsubscribe();
    if (this._storeSubscription)
      this._storeSubscription.unsubscribe();
  }

  private doDataMassage(stores: Store[]): void {
    this.data$ = Observable.create((observer) => {
      if (this.isSearch()) {
        this.setSearchResult();
        observer.next(this.dm.db.getRecordsToDisplay(1, this.pageSize, this._stores));
      }
      else
        observer.next(this.dm.db.getRecordsToDisplay(1, this.pageSize, stores));

      observer.complete();
    })

  }

  private setSearchResult(): void {
    if (this.searchArgument != '')
      this._stores = this._storesOriginal.filter(
        (store) => {
          return ((store.name && (store.name.toLowerCase().indexOf(this.searchArgument) >= 0)) )
        });
    else
      this._stores = this._storesOriginal;
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

  private setCounts(stores: Store[]): void {
    this.dm.sortHelper.sortByName(stores);
    this._stores = stores;
    this._storesOriginal = stores;
    this.totalRecords = stores.length;
    this.deletedStores = stores.filter((store) => store.deleted).length;
    this.sharedStores = stores.filter((store) => store.shared).length;
    this.draftStores = stores.filter((store) => store.draft).length;
    this.uploadStores = stores.filter((store) => (store && store.url)).length;
  }

  private setStores(): void {
    this.dm.doStores();
    this._storeSubscription = this.dm.stores.subscribe((stores: Store[]) => {
      if (stores) {
        this.totalRecords = stores.length;
        this._stores = stores;
        this.newPage(1);
      }
    })
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/stores/dashboard", active: false },
      { name: "stores", link: "/application/stores", active: true },
      { name: "new", link: "/application/stores/new", active: false },
    ]
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onNewItem() : void {
    this.router.navigate(['application', 'stores', 'new']);
  }

  newPage(value: number): void {
    this.data$ = Observable.create((observer) => {
      let stores = this.dm.db.getRecordsToDisplay(value, this.pageSize, this._stores);
      observer.next(stores);
      observer.complete();
    })
  }

  onDetail(data): void {
    this.router.navigate(['application', 'stores',  data.id])
  }

  onEdit(data): void {
    this.router.navigate(['application', 'stores', data.id, 'edit'])
  }

  onDelete(data): void {
    this.dm.db.setDeleted(STORES, data.id, data);
    this.router.navigate(['application', 'stores',  data.id])
  }

  onSearch(value) : void {
    this.router.navigate(['application', 'stores'], {queryParams: { searchArgument: value}})
  }

  get diagnostic() {
    return "Stores=" + JSON.stringify( this._stores);
  }

}
