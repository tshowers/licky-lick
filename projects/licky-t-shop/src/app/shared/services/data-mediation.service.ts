import { Injectable, OnDestroy } from '@angular/core';
import { SortHelperService, NewsService, FirebaseDataService, LickyLoginService, STORES, RECEIPTS, INVOICES, SHOPPING_CARTS, PRODUCTS, CATALOGS, PAYMENTS, OFFERS, ORDERS, PRODUCT_BUNDLES } from 'licky-services';
import { Subscription, Observable, BehaviorSubject, Subject } from 'rxjs';
import { Store, Product, Catalog, Payment, Offer, ProductBundle, Order, Invoice, Receipt, ShoppingCart, User } from 'lick-data';

@Injectable({
  providedIn: 'root'
})
export class DataMediationService implements OnDestroy {

  public user: User;

  public firebaseUser;

  public photoURL;
  public displayName;
  public emailAddress;
  public loggedIn;
  public userName;
  public emailVerified;

  setupTimer;
  public store = new Subject<Store>();
  public stores = new BehaviorSubject<Store[]>(null);
  private _stores: Store[];
  private _storeSubscription: Subscription;

  public product = new Subject<Product>();
  public products = new BehaviorSubject<Product[]>(null);
  private _products: Product[];
  private _productSubscription: Subscription;

  public catalog = new Subject<Catalog>();
  public catalogs = new BehaviorSubject<Catalog[]>(null);
  private _catalogs: Catalog[];
  private _catalogSubscription: Subscription;

  public payment = new Subject<Payment>();
  public payments = new BehaviorSubject<Payment[]>(null);
  private _payments: Payment[];
  private _paymentSubscription: Subscription;

  public offer = new Subject<Offer>();
  public offers = new BehaviorSubject<Offer[]>(null);
  private _offers: Offer[];
  private _offerSubscription: Subscription;

  public productBundle = new Subject<ProductBundle>();
  public productBundles = new BehaviorSubject<ProductBundle[]>(null);
  private _productBundles: ProductBundle[];
  private _productBundleSubscription: Subscription;

  public invoice = new Subject<Invoice>();
  public invoices = new BehaviorSubject<Invoice[]>(null);
  private _invoices: Invoice[];
  private _invoiceSubscription: Subscription;

  public receipt = new Subject<Receipt>();
  public receipts = new BehaviorSubject<Receipt[]>(null);
  private _receipts: Receipt[];
  private _receiptSubscription: Subscription;

  public order = new Subject<Order>();
  public orders = new BehaviorSubject<Order[]>(null);
  private _orders: Order[];
  private _orderSubscription: Subscription;

  public shoppingCart = new Subject<ShoppingCart>();
  public shoppingCarts = new BehaviorSubject<ShoppingCart[]>(null);
  private _shoppingCarts: ShoppingCart[];
  private _shoppingCartSubscription: Subscription;

  private _userSubscription: Subscription;
  private _firebaseUserSubscription: Subscription;


  constructor(public newsService: NewsService, public loginService: LickyLoginService, public db: FirebaseDataService, public sortHelper: SortHelperService) {
    this.setFirebaseUser();
    this.setUser();
  }

  ngOnDestroy() {
    if (this._storeSubscription)
      this._storeSubscription.unsubscribe();
    if (this._productSubscription)
      this._productSubscription.unsubscribe();
    if (this._catalogSubscription)
      this._catalogSubscription.unsubscribe();
    if (this._paymentSubscription)
      this._paymentSubscription.unsubscribe();
    if (this._offerSubscription)
      this._offerSubscription.unsubscribe();
    if (this._productBundleSubscription)
      this._productBundleSubscription.unsubscribe();
    if (this._invoiceSubscription)
      this._invoiceSubscription.unsubscribe();
    if (this._receiptSubscription)
      this._receiptSubscription.unsubscribe();
    if (this._orderSubscription)
      this._orderSubscription.unsubscribe();
    if (this._firebaseUserSubscription)
      this._firebaseUserSubscription.unsubscribe();
    if (this._shoppingCartSubscription)
      this._shoppingCartSubscription.unsubscribe();
    if (this._userSubscription)
      this._userSubscription.unsubscribe();
  }

  public doStores(): void {
    this.waitForUserSet();
  }

  public doProducts(store_id: string): void {
    this._productSubscription = this.db.getDataCollection(PRODUCTS + "/" + store_id)
      .subscribe((productData: Product[]) => {
        if (productData) {
          this._products = this.getProductListToArray(productData);
          this.products.next(this._products);
        }
      });
  }

  public getProductListToArray(data: any): any[] {
    let list: any[] = [];
    for (let item in data) {
      this.doProductFixUp(data, item);
      list.push(data[item]);
    }
    return list;
  }

  private doProductFixUp(data, item): void {
    data[item].id = item;
    if (data[item].name)
      data[item].name = data[item].name;
  }

  public doCatalogs(store_id: string): void {
    this._catalogSubscription = this.db.getDataCollection(CATALOGS + "/" + store_id)
      .subscribe((catalogData: Catalog[]) => {
        if (catalogData) {
          this._catalogs = this.getCatalogListToArray(catalogData);
          this.catalogs.next(this._catalogs);
        }
      });
  }

  public getCatalogListToArray(data: any): any[] {
    let list: any[] = [];
    for (let item in data) {
      this.doCatalogFixUp(data, item);
      list.push(data[item]);
    }
    return list;
  }

  private doCatalogFixUp(data, item): void {
    data[item].id = item;
    if (data[item].name)
      data[item].name = data[item].name;
  }

  public doPayments(store_id: string): void {
    this._paymentSubscription = this.db.getDataCollection(PAYMENTS + "/" + store_id)
      .subscribe((paymentData: Payment[]) => {
        if (paymentData) {
          this._payments = this.getPaymentListToArray(paymentData);
          this.payments.next(this._payments);
        }
      });
  }

  public getPaymentListToArray(data: any): any[] {
    let list: any[] = [];
    for (let item in data) {
      this.doPaymentFixUp(data, item);
      list.push(data[item]);
    }
    return list;
  }

  private doPaymentFixUp(data, item): void {
    data[item].id = item;
    if (data[item].name)
      data[item].name = data[item].name;
  }

  public doOffers(store_id: string): void {
    this._offerSubscription = this.db.getDataCollection(OFFERS + "/" + store_id)
      .subscribe((offerData: Offer[]) => {
        if (offerData) {
          this._offers = this.getOfferListToArray(offerData);
          this.offers.next(this._offers);
        }
      });
  }

  public getOfferListToArray(data: any): any[] {
    let list: any[] = [];
    for (let item in data) {
      this.doOfferFixUp(data, item);
      list.push(data[item]);
    }
    return list;
  }

  private doOfferFixUp(data, item): void {
    data[item].id = item;
    if (data[item].name)
      data[item].name = data[item].name;
  }


  public doProductBundles(store_id: string): void {
    this._productBundleSubscription = this.db.getDataCollection(PRODUCT_BUNDLES + "/" + store_id)
      .subscribe((productBundleData: ProductBundle[]) => {
        if (productBundleData) {
          this._productBundles = this.getProductBundleListToArray(productBundleData);
          this.productBundles.next(this._productBundles);
        }
      });
  }

  public getProductBundleListToArray(data: any): any[] {
    let list: any[] = [];
    for (let item in data) {
      this.doProductBundleFixUp(data, item);
      list.push(data[item]);
    }
    return list;
  }

  private doProductBundleFixUp(data, item): void {
    data[item].id = item;
    if (data[item].name)
      data[item].name = data[item].name;
  }

  public doOrders(store_id: string): void {
    this._orderSubscription = this.db.getDataCollection(ORDERS + "/" + store_id)
      .subscribe((orderData: Order[]) => {
        if (orderData) {
          this._orders = this.getOrderListToArray(orderData);
          this.orders.next(this._orders);
        }
      });
  }

  public getOrderListToArray(data: any): any[] {
    let list: any[] = [];
    for (let item in data) {
      this.doOrderFixUp(data, item);
      list.push(data[item]);
    }
    return list;
  }

  private doOrderFixUp(data, item): void {
    data[item].id = item;
    if (data[item].name)
      data[item].name = data[item].name;
  }

  public doShoppingCarts(store_id: string): void {
    this._shoppingCartSubscription = this.db.getDataCollection(SHOPPING_CARTS + "/" + store_id)
      .subscribe((shoppingCartData: ShoppingCart[]) => {
        if (shoppingCartData) {
          this._shoppingCarts = this.getShoppingCartListToArray(shoppingCartData);
          this.shoppingCarts.next(this._shoppingCarts);
        }
      });
  }

  public getShoppingCartListToArray(data: any): any[] {
    let list: any[] = [];
    for (let item in data) {
      this.dShoppingCartFixUp(data, item);
      list.push(data[item]);
    }
    return list;
  }

  private dShoppingCartFixUp(data, item): void {
    data[item].id = item;
    if (data[item].name)
      data[item].name = data[item].name;
  }

  public doStore(id: string): void {
    this.db.getData(STORES, id).subscribe((data) => {
      this.store.next(data);
    })
  }

  public doOrder(store_id: string, id: string): void {
    this.db.getData(ORDERS + "/" + store_id, id).subscribe((data) => {
      this.order.next(data);
    })
  }

  public doProduct(store_id: string, id: string): void {
    this.db.getData(PRODUCTS + "/" + store_id, id).subscribe((data) => {
      this.product.next(data);
    })
  }

  public doCatalog(store_id: string, id: string): void {
    this.db.getData(CATALOGS + "/" + store_id, id).subscribe((data) => {
      this.catalog.next(data);
    })
  }

  public doPayment(store_id: string, id: string): void {
    this.db.getData(PAYMENTS + "/" + store_id, id).subscribe((data) => {
      this.payment.next(data);
    })
  }

  public doOffer(store_id: string, id: string): void {
    this.db.getData(OFFERS + "/" + store_id, id).subscribe((data) => {
      this.offer.next(data);
    })
  }

  public doProductBundle(store_id: string, id: string): void {
    this.db.getData(PRODUCT_BUNDLES + "/" + store_id, id).subscribe((data) => {
      this.productBundle.next(data);
    })
  }

  public doInvoice(store_id: string, id: string): void {
    this.db.getData(INVOICES + "/" + store_id, id).subscribe((data) => {
      this.invoice.next(data);
    })
  }

  public doReceipt(store_id: string, id: string): void {
    this.db.getData(RECEIPTS + "/" + store_id, id).subscribe((data) => {
      this.receipt.next(data);
    })
  }

  public doShoppingCart(id: string): void {
    this.db.getData(SHOPPING_CARTS, id).subscribe((data) => {
      this.shoppingCart.next(data);
    })
  }


  private waitForUserSet(): void {
    this.setupTimer = setInterval(() => this.setDataSet(), 250);
  }

  private setDataSet(): void {
    if (this.loginService.getUser()) {
      clearInterval(this.setupTimer);
      this.setStores();
    }
  }

  private setStores(): void {
    this._storeSubscription = this.db.getDataCollection(STORES)
      .subscribe((data: Store[]) => {
        if (data) {
          this._stores = this.db.getListToArray(data);
          this.stores.next(this._stores);
        }
      });
  }

  // private setProducts(): void {
  //   this._productSubscription = this.db.getDataCollection(PRODUCTS)
  //     .subscribe((data: Product[]) => {
  //       if (data) {
  //         this._products = this.db.getListToArray(data);
  //         this.products.next(this._products);
  //       }
  //     });
  // }
  //
  // private setCatalogs(): void {
  //   this._catalogSubscription = this.db.getDataCollection(CATALOGS)
  //     .subscribe((data: Catalog[]) => {
  //       if (data) {
  //         this._catalogs = this.db.getListToArray(data);
  //         this.catalogs.next(this._catalogs);
  //       }
  //     });
  // }
  //
  // private setPayments(): void {
  //   this._paymentSubscription = this.db.getDataCollection(PAYMENTS)
  //     .subscribe((data: Payment[]) => {
  //       if (data) {
  //         this._payments = this.db.getListToArray(data);
  //         this.payments.next(this._payments);
  //       }
  //     });
  // }
  //
  // private setOffers(): void {
  //   this._offerSubscription = this.db.getDataCollection(OFFERS)
  //     .subscribe((data: Offer[]) => {
  //       if (data) {
  //         this._offers = this.db.getListToArray(data);
  //         this.offers.next(this._offers);
  //       }
  //     });
  // }
  //
  //
  //
  // private setProductBundles(): void {
  //   this._productBundleSubscription = this.db.getDataCollection(PRODUCT_BUNDLES)
  //     .subscribe((data: ProductBundle[]) => {
  //       if (data) {
  //         this._productBundles = this.db.getListToArray(data);
  //         this.productBundles.next(this._productBundles);
  //       }
  //     });
  // }
  //
  // private setInvoices(): void {
  //   this._invoiceSubscription = this.db.getDataCollection(INVOICES)
  //     .subscribe((data: Invoice[]) => {
  //       if (data) {
  //         this._invoices = this.db.getListToArray(data);
  //         this.invoices.next(this._invoices);
  //       }
  //     });
  // }
  //
  // private setOrders(): void {
  //   this._orderSubscription = this.db.getDataCollection(ORDERS)
  //     .subscribe((data: Order[]) => {
  //       if (data) {
  //         this._orders = this.db.getListToArray(data);
  //         this.orders.next(this._orders);
  //       }
  //     });
  // }
  //
  // private setReceipts(): void {
  //   this._receiptSubscription = this.db.getDataCollection(RECEIPTS)
  //     .subscribe((data: Receipt[]) => {
  //       if (data) {
  //         this._receipts = this.db.getListToArray(data);
  //         this.receipts.next(this._receipts);
  //       }
  //     });
  // }
  //
  // private setShoppingCarts(): void {
  //   this._shoppingCartSubscription = this.db.getDataCollection(SHOPPING_CARTS)
  //     .subscribe((data: ShoppingCart[]) => {
  //       if (data) {
  //         this._shoppingCarts = this.db.getListToArray(data);
  //         this.shoppingCarts.next(this._shoppingCarts);
  //       }
  //     });
  // }

  private setFirebaseUser(): void {
    this._firebaseUserSubscription = this.loginService.firebaseUser.subscribe((firebaseUser) => {
      this.firebaseUser = firebaseUser;
      if (this.firebaseUser) {
        this.setUserProperties();
      }
    })
  }

  private setUser(): void {
    this.user = this.loginService.getUser();
    this._userSubscription = this.loginService.userChanged.subscribe((user) => {
      this.user = user;
    })
  }

  private setUserProperties(): void {
    this.photoURL = this.firebaseUser.photoURL;
    this.displayName = this.firebaseUser.displayName;
    this.emailAddress = this.firebaseUser.email;
    this.loggedIn = true;
    this.userName = this.firebaseUser.email;
    this.emailVerified = this.firebaseUser.emailVerified;
  }

}
