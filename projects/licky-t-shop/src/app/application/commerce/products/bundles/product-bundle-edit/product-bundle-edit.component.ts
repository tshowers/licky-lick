import { Component, OnInit, OnDestroy, ViewChild, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductBundle, Store, Catalog, Product, Dropdown, Upload, Section } from 'lick-data';
import { UploadService, DropdownService, TypeFindService, PRODUCT_BUNDLES } from 'licky-services';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { DataMediationService } from '../../../../../shared/services/data-mediation.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product-bundle-edit',
  templateUrl: './product-bundle-edit.component.html',
  styleUrls: ['./product-bundle-edit.component.css']
})
export class ProductBundleEditComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  productBundle: ProductBundle = new ProductBundle();

  private _paramSubscription: Subscription;

  private _productBundleSubscription: Subscription;

  private _storeSubscription: Subscription;
  private _productSubscription: Subscription;
  private _catalogSubscription: Subscription;

  store_id;

  store: Store;

  catalog_id;

  catalog: Catalog;

  @ViewChild('dataForm') private frm: NgForm;

  @ViewChild('t') ngbTabSet;

  selectedFiles: FileList;

  currentUpload: Upload;

  searchArgument;

  section: Section = new Section();

  toggleClass;
  products: Product[] = [];
  product: Product;

  constructor(public dm: DataMediationService,
    protected renderer2: Renderer2,
    public router: Router,
    public typeFindService: TypeFindService,
    private _dropdownService: DropdownService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this._route.data
      .subscribe((data: { productBundle: ProductBundle }) => {
        if (data.productBundle) {
          this.productBundle = data.productBundle;
          console.log("Bundle passed", JSON.stringify(this.productBundle))
          this.store_id = this.productBundle.store_id
          this.initializeDropdowns();
          this.setStoreContext();
          this.setToggleClass();
        }
      });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._paramSubscription)
      this._paramSubscription.unsubscribe();
    if (this._storeSubscription)
      this._storeSubscription.unsubscribe();
    if (this._productSubscription)
      this._productSubscription.unsubscribe();
    if (this._catalogSubscription)
      this._catalogSubscription.unsubscribe();
    if (this._productBundleSubscription)
      this._productBundleSubscription.unsubscribe();
  }

  onSubmit(): void {
    this.modelCheck();
    console.log("SAVING", JSON.stringify(this.productBundle));
    (this.productBundle.id ? this.onUpdate() : this.saveNewProductBundle());
  }

  onUpdate(): void {
    this.dm.db.updateData(PRODUCT_BUNDLES + "/" + this.store_id, this.productBundle.id, this.productBundle);
    const redirectPath = '/application/stores/' + this.store_id + '/catalogs/' + this.catalog_id + '/product-bundles/' + this.productBundle.id;
    this.uploadSingle();
    this.redirect(redirectPath);
  }

  onDelete(): void {
    this.productBundle.deleted = true;
    this.onUpdate();
    this.onBrandNew();
  }

  saveNewProductBundle(): void {
    this.dm.db.writeData(PRODUCT_BUNDLES + "/" + this.store_id, this.productBundle).subscribe((key) => {
      this.productBundle.id = key;
      const redirectPath = '/application/stores/' + this.store_id + '/catalogs/' + this.catalog_id + '/product-bundles/' + this.productBundle.id;
      this.uploadSingle();
      this.redirect(redirectPath);
    });
  }

  private redirect(redirectPath): void {
    if (!this.currentUpload) {
      this.router.navigate([redirectPath]);
    }
    else {
      let uploadCheck = setInterval(() => {
        if (this.currentUpload.progress >= 100) {
          clearInterval(uploadCheck);
          this.router.navigate([redirectPath]);
        }
      }, 1000)
    }
  }


  private uploadSingle() {
    if (this.selectedFiles) {
      let file = this.selectedFiles.item(0)
      if (file) {
        this.currentUpload = new Upload(file);
        this.currentUpload.product_bundle_id = this.productBundle.id;
        this._uploadService.pushFileToStorage(this.currentUpload, PRODUCT_BUNDLES + "/" + this.store_id, '/application/stores/' + this.store_id, this.productBundle, this.dm.db);
        console.log("UPLOADED", JSON.stringify(this.productBundle));
      }
    }
  }

  private detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  toggleActivated(): void {
    this.productBundle.activated = (!this.productBundle.activated);
    this.setToggleClass();
  }

  setToggleClass(): void {
    this.toggleClass = (this.productBundle.activated) ? "fa fa-toggle-on fa-2x" : "fa fa-toggle-off fa-2x";
  }

  editProductInBundle(at: number): void {
    this.product = this.productBundle.products[at];
    this.removeProductInBundle(at);
  }

  removeProductInBundle(at: number): void {
    this.productBundle.products.splice(at, 1);
  }

  onBrandNew(): void {
    this.productBundle = new ProductBundle();
  }

  newProductForBundle(): void {
    const bundleProduct = this.getProduct(this.product);
    // console.log("Pushing", this.product, JSON.stringify( bundleProduct));
    if (!this.isProductAlreadyThere(bundleProduct.id))
      this.productBundle.products.push(bundleProduct);
  }

  private getProduct(id): Product {
    return this.products.find(product => product.id == id);
  }

  private isProductAlreadyThere(id): boolean {
    let p = this.productBundle.products.find(product => product.id == id);
    return p ? true : false;
  }


  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/stores/dashboard", active: false },
      { name: this.store.name, link: "/application/stores/" + this.store_id, active: false },
      { name: this.catalog.name, link: "/application/stores/" + this.store_id + "/catalogs/" + this.catalog_id, active: false },
      { name: "product bundles", link: "/application/stores/" + this.store_id + "/catalogs/" + this.catalog_id + "/product-bundles", active: false },
      { name: "new", link: "/application/stores/" + this.store_id + "/catalogs/" + this.catalog_id + "/product-bundles/new", active: true },
    ]
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
    }
  }

  private setStore(): void {
    this.dm.doStore(this.store_id);
    this._storeSubscription = this.dm.store.subscribe((store) => {
      this.store = store;
      this.setCatalog();
    })
  }

  private setCatalog(): void {
    this.dm.doCatalog(this.store_id, this.catalog_id);
    this._catalogSubscription = this.dm.catalog.subscribe((catalog) => {
      this.catalog = catalog;
      this.setBreadCrumb();
    })
  }

  private initializeDropdowns(): void {
    this.dm.doProducts(this.store_id);
    this._productSubscription = this.dm.products.subscribe((products) => {
      if (products) {
        this.products = products;
      }
    })
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onSearch(value): void {
    this.router.navigate(['application', 'stores', this.store_id, 'catalogs', this.catalog_id, 'product-bundles'], { queryParams: { searchArgument: value } })
  }

  modelCheck() {
    if (this.section.name)
      this.newSection();
  }

  newSection(): void {
    this.productBundle.sections.push(this.section);
    this.section = new Section();
  }

  editSection(at: number): void {
    this.section = this.productBundle.sections[at];
    this.removeSection(at);
  }

  removeSection(at: number): void {
    this.productBundle.sections.splice(at, 1);
  }


  get diagnostic() {
    return JSON.stringify(this.productBundle, null, 2)
      + ", store_id=" + this.store_id
      + ", STORE=" + JSON.stringify(this.store, null, 2)
  }

}
