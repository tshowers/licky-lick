import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Payment } from 'lick-data';
import { FirebaseDataService, PAYMENTS } from 'licky-services';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Payment> {
    const id1 = route.paramMap.get('id');
    const id2 = route.paramMap.get('id2');

    if (id1)
      return this.getPayment(id1, id2);
    else
      this.router.navigate(['application', 'stores'])
  }

  getPayment(id1, id2) : Observable<Payment> {
    if (id2) {
      return this._db.getData(PAYMENTS + '/' + id1, id2)
      .pipe(
        map(payment => {
          if (payment) {
            Payment.restoreData(payment);
            this.incrementViewCount(payment, id1, id2);
            return (payment.id == id2) ? payment : of(this.getNew(id1));
          } else {
            return of(this.getNew(id1));
          }
        })
      )
    } else {
      return of(this.getNew(id1));
    }

  }

  getNew(store_id: string): Payment {
    let data = new Payment();
    data.store_id = store_id
    data.draft = true;
    return data;
  }

  private incrementViewCount(payment: Payment, id1, id2): void {
    if (payment) {
      payment.id = id2;
      if (payment.views && !isNaN(payment.views)) {
        payment.views++;
      } else {
        payment.views = 0;
        payment.views++;
      }
      payment.lastViewed = new Date().getTime();
      this._db.updateData(PAYMENTS + '/' + id1, id2, payment);
    }
  }
}
