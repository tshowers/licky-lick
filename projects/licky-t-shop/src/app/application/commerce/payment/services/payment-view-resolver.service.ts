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
export class PaymentViewResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Payment> {
    const id1 = route.paramMap.get('id');
    const id2 = route.paramMap.get('id2');

    return this._db.getData(PAYMENTS + '/' + id1, id2)
    .pipe(map(payment => {
      if (payment) {
        this.incrementViewCount(payment, id1, id2);
        return (payment.id == id2) ? payment : null;
      } else {
        if (id1)
          this.router.navigate(['application', 'stores', id1, 'payments']);
        else
          this.router.navigate(['application', 'stores']);
        return null;
      }
    }));
  }

  private setSocialData(payment: Payment) : void {
    //TODO
  }

  private incrementViewCount(payment: Payment, id1, id2) : void {
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
