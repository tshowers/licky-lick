import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, Offer, Product } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { STORES } from 'licky-services';
import { DataMediationService } from '../../../../shared/services/data-mediation.service';
import { Subscription } from 'rxjs';

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

  offers: Offer[];

  products: Product[];

  private _offersSubscription: Subscription;

  private _productSubscription: Subscription;

  offer1: Offer;

  offer2: Offer;

  images = [];

  DEFAULT_SMALL = "assets/images/default-small.png";


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
        this.setOffers();
        this.setProducts();
      });
  }



  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._offersSubscription)
      this._offersSubscription.unsubscribe();
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/stores/dashboard", active: false },
      { name: "stores", link: "/application/stores", active: false },
      { name: this.store.name, link: "/application/stores/" + this.store.id, active: true },
      { name: "new", link: "/application/stores/new", active: false },
      { name: "catalogs", link: "/application/stores/" + this.store.id + "/catalogs", active: false },
    ]
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onEdit() {
    this.router.navigate(['application', 'stores', this.store.id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'top' });
  }

  onCatalog() {
    this.router.navigate(['application', 'stores', this.store.id, 'catalogs'])
  }

  onOffer1(): void {
    this.router.navigate(['application', 'stores', this.store.id, 'catalogs', this.offer1.catalog_id, 'offers', this.offer1.id]);
  }

  onOffer2(): void {
    this.router.navigate(['application', 'stores', this.store.id, 'catalogs', this.offer1.catalog_id, 'offers', this.offer2.id]);
  }

  onProduct(item) : void {
    this.router.navigate(['application', 'stores', this.store.id, 'catalogs', this.offer1.catalog_id, 'products', item.id]);
  }


  setOffers() {
    this.dm.doOffers(this.store.id);
    this._offersSubscription = this.dm.offers.subscribe((offers) => {
      if (offers) {
        this.setPageOffers(offers);
        this.offers = offers;
      }
    })
  }

  setProducts() {
    this.dm.doProducts(this.store.id);
    this._productSubscription = this.dm.products.subscribe((products) => {
      if (products) {
        // let p = products.filter((product) => {
        //   return (product && product.url)
        // });
        // console.log("Products", JSON.stringify(p));
        // this.products = p;
        this.products = products.slice(0,3);
        this.setLightBoxImages(this.products);
      }
    })
  }

  private setLightBoxImages(products: Product[]): void {
    for (let i = 0; i < products.length; i++) {
      if (products[i].url)
        this.images.push({ src: products[i].url, caption: products[i].name, thumb: (products[i].icon ? products[i].icon : this.DEFAULT_SMALL) });
      if (i > 4)
        break;
    }
  }

  private setPageOffers(offers: Offer[]): void {

    const today = new Date().getTime()
    for (let i = 0; i < offers.length; i++) {
      console.log("Comparing", today, offers[i].expirationDate)
      if (offers[i].expirationDate < today) {
        if (!this.offer1 && offers[i].url)
          this.offer1 = offers[i];
        else if (!this.offer2 && offers[i].url) {
          this.offer2 = offers[i];
          break;
        }

      }
    }

  }

  onDelete() {
    this.dm.db.setDeleted(STORES, this.store.id, this.store);
    this.router.navigate(['application', 'stores']);
  }

  onSearch(value): void {
    console.log("ONSEARCH", value);
    this.router.navigate(['application', 'stores'], { queryParams: { searchArgument: value } })
  }

  onBuy(): void {
    console.log("Buy Click");
  }

  get diagnostic() {
    return JSON.stringify(this.store, null, 2)
  }

}
