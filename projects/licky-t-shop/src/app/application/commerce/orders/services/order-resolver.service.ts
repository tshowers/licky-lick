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
export class OrderResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order> {
    const id1 = route.paramMap.get('id');
    const id2 = route.paramMap.get('id2');

    if (id1)
      return this.getOrder(id1, id2);
    else
      this.router.navigate(['application', 'stores'])
  }

  getOrder(id1, id2) : Observable<Order> {
    if (id2) {
      return this._db.getData(ORDERS + '/' + id1, id2)
      .pipe(
        map(order => {
          if (order) {
            Order.restoreData(order);
            this.incrementViewCount(order, id1, id2);
            return (order.id == id2) ? order : of(this.getNew(id1));
          } else {
            return of(this.getNew(id1));
          }
        })
      )
    } else {
      return of(this.getNew(id1));
    }

  }

  getNew(store_id: string): Order {
    let data = new Order();
    data.store_id = store_id
    data.draft = true;
    return data;
  }

  private incrementViewCount(order: Order, id1, id2): void {
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
