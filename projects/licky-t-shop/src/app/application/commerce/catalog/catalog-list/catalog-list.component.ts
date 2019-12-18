import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { DataMediationService } from '../../../../shared/services/data-mediation.service';
import { Observable, Subscription } from 'rxjs';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Catalog, Store } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { CATALOGS } from 'licky-services';


@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  store_id;

  store: Store;

  data$: Observable<any[]>;

  private _catalogs: Catalog[];

  private _catalogsOriginal;

  pageSize = 5;

  totalRecords = 0;

  private _searchArgumentSubscription: Subscription;

  private _catalogSubscription: Subscription;

  private _paramSubscription: Subscription;

  searchArgument = '';

  deletedCatalogs: number = 0;
  sharedCatalogs: number = 0;
  draftCatalogs: number = 0;
  uploadCatalogs: number = 0;

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
    if (this._catalogSubscription)
      this._catalogSubscription.unsubscribe();
  }

  private setStoreContext(): void {
    if (this._route.snapshot.params['id']) {
      this.store_id = this._route.snapshot.params['id'];
      this._paramSubscription = this._route.params.subscribe(
        (params: Params) => {
          this.store_id = this._route.snapshot.params['id'];
        });
      this.setStore();
      this.setCatalogs();
    }
  }

  private setStore(): void {
    this.dm.doStore(this.store_id);
    this.dm.store.subscribe((store) => {
      this.store = store;
      this.setBreadCrumb();
    })
  }


  private doDataMassage(catalogs: Catalog[]): void {
    this.data$ = Observable.create((observer) => {
      if (this.isSearch()) {
        this.setSearchResult();
        observer.next(this.dm.db.getRecordsToDisplay(1, this.pageSize, this._catalogs));
      }
      else
        observer.next(this.dm.db.getRecordsToDisplay(1, this.pageSize, catalogs));

      observer.complete();
    })

  }

  private setSearchResult(): void {
    if (this.searchArgument != '')
      this._catalogs = this._catalogsOriginal.filter(
        (catalog) => {
          return ((catalog.name && (catalog.name.toLowerCase().indexOf(this.searchArgument) >= 0)) )
        });
    else
      this._catalogs = this._catalogsOriginal;
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

  private setCounts(catalogs: Catalog[]): void {
    this.dm.sortHelper.sortByName(catalogs);
    this._catalogs = catalogs;
    this._catalogsOriginal = catalogs;
    this.totalRecords = catalogs.length;
    this.deletedCatalogs = catalogs.filter((catalog) => catalog.deleted).length;
    this.sharedCatalogs = catalogs.filter((catalog) => catalog.shared).length;
    this.draftCatalogs = catalogs.filter((catalog) => catalog.draft).length;
    this.uploadCatalogs = catalogs.filter((catalog) => (catalog && catalog.url)).length;
  }

  private setCatalogs(): void {
    this.dm.doStores();
    this._catalogSubscription = this.dm.catalogs.subscribe((catalogs: Catalog[]) => {
      if (catalogs) {
        this.totalRecords = catalogs.length;
        this.setCounts(catalogs);
        this.doDataMassage(catalogs);
        this._catalogs = catalogs;
        this.newPage(1);
      }
    })
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/dashboard", active: false },
      { name: "catalogs", link: "/application/stores/" + this.store_id + "/catalogs", active: true },
      { name: "new", link: "/application/stores/" + this.store_id + "/catalogs/new", active: false },
    ]
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onNewItem() : void {
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs', 'new']);
  }

  newPage(value: number): void {
    this.data$ = Observable.create((observer) => {
      let catalogs = this.dm.db.getRecordsToDisplay(value, this.pageSize, this._catalogs);
      observer.next(catalogs);
      observer.complete();
    })
  }

  onDetail(data): void {
    console.log(JSON.stringify(data))
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs',  data.id])
  }

  onEdit(data): void {
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs', data.id, 'edit'])
  }

  onDelete(data): void {
    data.deleted = true;
    this.dm.db.updateData(CATALOGS, data.id, data);
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs',  data.id])
  }

  onSearch(value) : void {
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs'], {queryParams: { searchArgument: value}})
  }

  get diagnostic() {
    return "Catalogs=" + JSON.stringify( this._catalogs);
  }

}
