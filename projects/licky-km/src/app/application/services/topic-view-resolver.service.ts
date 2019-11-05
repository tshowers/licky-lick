import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/'
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { FirebaseDataService, TOPICS } from 'licky-services';
import { Topic } from 'lick-data';
import { map } from 'rxjs/operators';

@Injectable()
export class TopicViewResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Topic> {
    const id = route.paramMap.get('id');

    return this._db.getData(TOPICS, id).pipe(map(topic => {
      if (topic) {
        this.setSocialData(topic);
        this.incrementViewCount(topic, id);
        return topic;
      } else {
        this.router.navigate(['application', 'topics']);
        return null;
      }
    }));
  }

  private setSocialData(topic: Topic): void {

  }

  private incrementViewCount(topic: Topic, id): void {
    if (topic) {
      topic.id = id;
      if (topic.views && !isNaN(topic.views)) {
        topic.views++;
      } else {
        topic.views = 0;
        topic.views++;
      }
      topic.lastViewed = new Date().getTime();
      this._db.updateData(TOPICS, id, topic);
    }
  }

}
