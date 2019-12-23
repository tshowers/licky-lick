import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Topic } from 'lick-data';
import { FirebaseDataService, TOPICS } from 'licky-services';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TopicResolverService {

  constructor(private _db: FirebaseDataService, public router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Topic> {
    const id = route.paramMap.get('id');
    return this.getTopic(id);
  }

  getTopic(id): Observable<Topic> {
    if (id) {
      return this._db.getData(TOPICS, id)
        .pipe(map(topic => {
          if (topic) {
            Topic.restoreData(topic);
            this.incrementViewCount(topic, id);
            return (topic.id == id) ? topic : new Topic();
          } else {
            return this.getTopicObject();
          }
        }))
    } else {
      return of(this.getTopicObject());
    }
  }

  private getTopicObject(): Topic {
    let topic = new Topic();
    topic.draft = true;
    topic.sections = [];
    return topic;

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
