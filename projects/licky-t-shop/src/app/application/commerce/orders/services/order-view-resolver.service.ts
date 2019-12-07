import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Order } from 'lick-data';
import { FirebaseDataService, ORDERS } from 'licky-services';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderViewResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order> {
    const id1 = route.paramMap.get('id');
    const id2 = route.paramMap.get('id2');

    return this._db.getData(ORDERS + '/' + id1, id2)
    .pipe(map(order => {
      if (order) {
        this.incrementViewCount(order, id1, id2);
        return (order.id == id2) ? order : null;
      } else {
        if (id1)
          this.router.navigate(['application', 'stores', id1, 'orders']);
        else
          this.router.navigate(['application', 'stores']);
        return null;
      }
    }));
  }

  private setSocialData(order: Order) : void {
    //TODO
  }

  private incrementViewCount(order: Order, id1, id2) : void {
    if (order) {
      order.id = id2;
      if (order.views && !isNaN(order.views)) {
        order.views++;
      } else {
        order.views = 0;
        order.views++;
      }
      order.lastViewed = new Date().getTime();
      this._db.updateData(ORDERS + '/' + id1, id2, order);
    }
  }
}
