import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { DataMediationService } from '../../../../shared/services/data-mediation.service';
import { Observable, Subscription } from 'rxjs';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Payment, Store } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { PAYMENTS } from 'licky-services';


@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  store_id;

  store: Store;

  data$: Observable<any[]>;

  private _payments: Payment[];

  private _paymentsOriginal;

  pageSize = 5;

  totalRecords = 0;

  private _searchArgumentSubscription: Subscription;

  private _paymentSubscription: Subscription;

  private _paramSubscription: Subscription;

  searchArgument = '';

  deletedPayments: number = 0;
  sharedPayments: number = 0;
  draftPayments: number = 0;
  uploadPayments: number = 0;

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
    if (this._paymentSubscription)
      this._paymentSubscription.unsubscribe();
  }

  private setStoreContext(): void {
    if (this._route.snapshot.params['id']) {
      this.store_id = this._route.snapshot.params['id'];
      this._paramSubscription = this._route.params.subscribe(
        (params: Params) => {
          this.store_id = this._route.snapshot.params['id'];
        });
      this.setStore();
      this.setPayments();
    }
  }

  private setStore(): void {
    this.dm.doStore(this.store_id);
    this.dm.store.subscribe((store) => {
      this.store = store;
      this.setBreadCrumb();
    })
  }


  private doDataMassage(payments: Payment[]): void {
    this.data$ = Observable.create((observer) => {
      if (this.isSearch()) {
        this.setSearchResult();
        observer.next(this.dm.db.getRecordsToDisplay(1, this.pageSize, this._payments));
      }
      else
        observer.next(this.dm.db.getRecordsToDisplay(1, this.pageSize, payments));

      observer.complete();
    })

  }

  private setSearchResult(): void {
    if (this.searchArgument != '')
      this._payments = this._paymentsOriginal.filter(
        (payment) => {
          return ((payment.name && (payment.name.toLowerCase().indexOf(this.searchArgument) >= 0)) )
        });
    else
      this._payments = this._paymentsOriginal;
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

  private setCounts(payments: Payment[]): void {
    this.dm.sortHelper.sortByName(payments);
    this._payments = payments;
    this._paymentsOriginal = payments;
    this.totalRecords = payments.length;
    this.deletedPayments = payments.filter((payment) => payment.deleted).length;
    this.draftPayments = payments.filter((payment) => payment.draft).length;
  }

  private setPayments(): void {
    this.dm.doStores();
    this._paymentSubscription = this.dm.payments.subscribe((payments: Payment[]) => {
      if (payments) {
        this.totalRecords = payments.length;
        this.setCounts(payments);
        this.doDataMassage(payments);
        this._payments = payments;
        this.newPage(1);
      }
    })
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/dashboard", active: false },
      { name: this.store.name, link: "/application/stores/" + this.store_id, active: false },
      { name: "payments", link: "/application/stores/" + this.store_id + "/payments", active: true },
      { name: "new", link: "/application/stores/" + this.store_id + "/payments/new", active: false },
    ]
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onNewItem() : void {
    this.router.navigate(['application', 'stores', this.store_id, 'payments', 'new']);
  }

  newPage(value: number): void {
    this.data$ = Observable.create((observer) => {
      let payments = this.dm.db.getRecordsToDisplay(value, this.pageSize, this._payments);
      observer.next(payments);
      observer.complete();
    })
  }

  onDetail(data): void {
    console.log(JSON.stringify(data))
    this.router.navigate(['application', 'stores', this.store_id, 'payments',  data.id])
  }

  onEdit(data): void {
    this.router.navigate(['application', 'stores', this.store_id, 'payments', data.id, 'edit'])
  }

  onDelete(data): void {
    data.deleted = true;
    this.dm.db.updateData(PAYMENTS, data.id, data);
    this.router.navigate(['application', 'stores', this.store_id, 'payments',  data.id])
  }

  onSearch(value) : void {
    this.router.navigate(['application', 'stores', this.store_id, 'payments'], {queryParams: { searchArgument: value}})
  }

  get diagnostic() {
    return "Payments=" + JSON.stringify( this._payments);
  }

}
