import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve,  RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { FirebaseDataService, FOPS } from 'licky-services';
import { FOP } from 'lick-data';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class FopViewResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FOP> {
    let id1 = route.paramMap.get('id');
    let id2 = route.paramMap.get('id2');

    return this._db.getData(FOPS , id2)
    .pipe(map(fop => {
      if (fop) {
        // FOP.restoreData(fop);
        this.setSocialData(fop);
        this.incrementViewCount(fop, id1);
        return (fop.id == id2) ? fop : null;
      } else {
        if (id1)
          this.router.navigate(['/app/contacts/' + id1 + '/fops']);
        else
          this.router.navigate(['/app/contacts']);
        return null;
      }
    }));
  }
  private setSocialData(fop: FOP) : void {
    // this._socialService.setDataItemSocial(fop);
  }

  private incrementViewCount(fop: FOP, id1) : void {
    fop.views++;
    fop.lastViewed = new Date().getTime();
    this._db.updateData(FOPS + '/' + id1, fop.id, fop);
  }

}
