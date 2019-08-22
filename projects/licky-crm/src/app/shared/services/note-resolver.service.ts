import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { JustText } from 'lick-data';
import { FirebaseDataService, JUST_TEXTS } from 'licky-services';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class NoteResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<JustText> {
    let id1 = route.paramMap.get('id');
    let id2 = route.paramMap.get('id2');
    if (id1)
      return this.getNote(id1, id2)
    else
      this.router.navigate(['application', 'contacts'])
  }

  getNote(id1, id2): Observable<JustText> {
    if (id2) {
      return this._db.getData(JUST_TEXTS + '/' + id1, id2)
        .pipe(map(justText => {
          if (justText) {
            // JustText.restoreData(justText);
            this.incrementViewCount(justText, id1);
            return (justText.id == id2) ? justText : of(this.getNew(id1));
          } else {
            return of(this.getNew(id1));
          }
        }))
    } else {
      return of(this.getNew(id1));
    }
  }

  getNew(contact_id: string): JustText {
    let data = new JustText();
    data.draft = true;
    data.contact_id = contact_id
    return data;
  }

  private incrementViewCount(justText: JustText, id1): void {
    justText.views++;
    justText.lastViewed = new Date().getTime();
    this._db.updateData(JUST_TEXTS + '/' + id1, justText.id, justText);
  }

}
