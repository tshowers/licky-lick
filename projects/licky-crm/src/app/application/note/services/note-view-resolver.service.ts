import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { FirebaseDataService, JUST_TEXTS } from 'licky-services';
import { JustText } from 'lick-data';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class NoteViewResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<JustText> {
    const id1 = route.paramMap.get('id');
    const id2 = route.paramMap.get('id2');

    return this._db.getData(JUST_TEXTS + '/' + id1, id2)
      .pipe(map(justText => {
        if (justText) {
          this.incrementViewCount(justText, id1, id2);
          return (justText.id == id2) ? justText : null;
        } else {
          if (id1)
            this.router.navigate(['application', 'contacts', id1, 'notes']);
          else
            this.router.navigate(['application', 'contacts']);
          return null;
        }
      }));
  }
  private setSocialData(justText: JustText): void {
    //TODO
  }

  private incrementViewCount(justText: JustText, id1, id2): void {
    if (justText) {
      justText.id = id2;
      if (justText.views && !isNaN(justText.views)) {
        justText.views++;
      } else {
        justText.views = 0;
        justText.views++;
      }
      justText.lastViewed = new Date().getTime();
      this._db.updateData(JUST_TEXTS + '/' + id1, id2, justText);
    }
  }

}
