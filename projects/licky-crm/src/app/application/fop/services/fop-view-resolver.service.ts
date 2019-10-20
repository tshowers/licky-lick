import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { FirebaseDataService, FOPS } from 'licky-services';
import { FOP } from 'lick-data';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class FopViewResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FOP> {
    const id1 = route.paramMap.get('id');
    const id2 = route.paramMap.get('id2');

    return this._db.getData(FOPS + '/' + id1, id2)
      .pipe(map(fop => {
        if (fop) {
          this.incrementViewCount(fop, id1, id2);
          return (fop.id == id2) ? fop : null;
        } else {
          if (id1)
            this.router.navigate(['application', 'contacts', id1, 'form-of-payments']);
          else
            this.router.navigate(['application', 'contacts']);
          return null;
        }
      }));
  }

  private setSocialData(fop: FOP): void {
    //TODO
  }

  private incrementViewCount(fop: FOP, id1, id2): void {
    if (fop) {
      fop.id = id2;
      if (fop.views && !isNaN(fop.views)) {
        fop.views++;
      } else {
        fop.views = 0;
        fop.views++;
      }
      fop.lastViewed = new Date().getTime();
      this._db.updateData(FOPS + '/' + id1, id2, fop);
    }
  }

}
