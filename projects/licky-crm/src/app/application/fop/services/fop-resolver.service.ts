import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { FOP } from 'lick-data';
import { FirebaseDataService, FOPS } from 'licky-services';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class FopResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FOP> {
    let id1 = route.paramMap.get('id');
    let id2 = route.paramMap.get('id2');

    if (id1)
      return this.getFop(id1, id2);
    else
      this.router.navigate(['application', 'contacts'])
  }

  getFop(id1, id2): Observable<FOP> {
    if (id2) {
      return this._db.getData(FOPS + '/' + id1, id2)
        .pipe(map(fop => {
          if (fop) {
            FOP.restoreData(fop);
            this.incrementViewCount(fop, id1, id2);
            return (fop.id == id2) ? fop : of(this.getNew(id1));
          } else {
            return of(this.getNew(id1));
          }
        }))
    } else {
      return of(this.getNew(id1));
    }

  }

  getNew(contact_id: string): FOP {
    let data = new FOP();
    data.draft = true;
    data.contact_id = contact_id
    return data;
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
