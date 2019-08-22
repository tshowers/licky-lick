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
    let id1 = route.paramMap.get('id');
    let id2 = route.paramMap.get('id2');

    return this._db.getData(JUST_TEXTS + '/' + id1, id2)
    .pipe(map(justText => {
      if (justText) {
        // JustText.restoreData(justText);
        this.setSocialData(justText);
        this.incrementViewCount(justText, id1);
        return (justText.id == id2) ? justText : null;
      } else {
        if (id1)
          this.router.navigate(['/app/contacts/' + id1 + '/notes']);
        else
          this.router.navigate(['/app/contacts']);
        return null;
      }
    }));
  }
  private setSocialData(justText: JustText) : void {
    // this._socialService.setDataItemSocial(justText);
  }

  private incrementViewCount(justText: JustText, id1) : void {
    justText.views++;
    justText.lastViewed = new Date().getTime();
    this._db.updateData(JUST_TEXTS + '/' + id1, justText.id, justText);
  }

}
