import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { STORES } from 'licky-services';
import { DataMediationService } from '../../../../shared/services/data-mediation.service';


@Component({
  selector: 'app-store-view',
  templateUrl: './store-view.component.html',
  styleUrls: ['./store-view.component.css']
})
export class StoreViewComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  store: Store;

  canEdit = true;

  canDelete = true;

  searchArgument;

  isImage: boolean = false;

  constructor(public dm: DataMediationService, protected renderer2: Renderer2,
    public router: Router,
    private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this._route.data
      .subscribe((data: { store: Store }) => {
        this.store = data.store;
        this.isImage = (this.store.url && ((this.store.url.indexOf('.tiff') > 0) || (this.store.url.indexOf('.jpg') > 0) || (this.store.url.indexOf('.gif') > 0) || (this.store.url.indexOf('.png') > 0) || (this.store.url.indexOf('.jpeg') > 0)))
        this.setBreadCrumb();
        this.searchArgument = this.store.name;
      });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/stores/dashboard", active: false },
      { name: "stores", link: "/application/stores", active: false },
      { name: this.store.name, link: "/application/stores/" + this.store.id, active: true },
      { name: "new", link: "/application/stores/new", active: false },
    ]
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onEdit() {
    this.router.navigate(['application', 'stores', this.store.id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'top' });
  }

  onCatalog() {
    this.router.navigate(['application', 'stores', this.store.id, 'catalogs' ])
  }


  onDelete() {
    this.store.deleted = true;
    this.dm.db.updateData(STORES, this.store.id, this.store);
    this.router.navigate(['application', 'stores']);
  }

  onSearch(value): void {
    console.log("ONSEARCH", value);
    this.router.navigate(['application', 'stores'], { queryParams: { searchArgument: value } })
  }

  get diagnostic() {
    return JSON.stringify(this.store, null, 2)
  }

}
