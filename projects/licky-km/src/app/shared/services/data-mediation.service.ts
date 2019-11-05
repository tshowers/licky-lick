import { Injectable, OnDestroy } from '@angular/core';
import { SortHelperService, NewsService, FirebaseDataService, LickyLoginService, TOPICS  } from 'licky-services';
import { map } from 'rxjs/operators';
import { Subscription, Observable, BehaviorSubject, Subject } from 'rxjs';
import { Topic, User } from 'lick-data';

@Injectable({
  providedIn: 'root'
})

export class DataMediationService implements OnDestroy {

  public user: User;

  public firebaseUser;

  public photoURL;
  public displayName;
  public emailAddress;
  public loggedIn;
  public userName;
  public emailVerified;

  setupTimer;
  public topic = new Subject<Topic>();

  public topics = new BehaviorSubject<Topic[]>(null);
  private _topics: Topic[];


  private _topicSubscription: Subscription;
  private _userSubscription: Subscription;
  private _firebaseUserSubscription: Subscription;

  constructor(public newsService: NewsService, public loginService: LickyLoginService, public db: FirebaseDataService, public sortHelper: SortHelperService) {
    this.setFirebaseUser();
    this.setUser();
  }

  ngOnDestroy() {
    if (this._topicSubscription)
      this._topicSubscription.unsubscribe();
    if (this._firebaseUserSubscription)
      this._firebaseUserSubscription.unsubscribe();
    if (this._userSubscription)
      this._userSubscription.unsubscribe();
  }


  public doTopic(id: string) : void {
    this.db.getData(TOPICS, id).subscribe((topic) => {
      this.topic.next(topic);
    })
  }

  public getTopic(id: string): Topic {
    return  (this._topics) ?
    this._topics.find(topic => topic.id == id) : null

  }

  public doTopics(): void {
    this.waitForUserSet();
  }

  private waitForUserSet(): void {
    this.setupTimer = setInterval(() => this.setDataSet(), 250);
  }

  private setDataSet(): void {
    if (this.loginService.getUser()) {
      clearInterval(this.setupTimer);
      this.setTopics()
    }
  }

  private setTopics(): void {
    this._topicSubscription = this.db.getDataCollection(TOPICS)
      .subscribe((topicData: Topic[]) => {
        if (topicData) {
          this._topics = this.db.getListToArray(topicData);
          this.topics.next(this._topics);
        }
      });

  }

  private setFirebaseUser(): void {
    this._firebaseUserSubscription = this.loginService.firebaseUser.subscribe((firebaseUser) => {
      this.firebaseUser = firebaseUser;
      if (this.firebaseUser) {
        this.setUserProperties();
      }
    })
  }

  private setUser(): void {
    this.user = this.loginService.getUser();
    this._userSubscription = this.loginService.userChanged.subscribe((user) => {
      this.user = user;
    })
  }

  private setUserProperties(): void {
    this.photoURL = this.firebaseUser.photoURL;
    this.displayName = this.firebaseUser.displayName;
    this.emailAddress = this.firebaseUser.email;
    this.loggedIn = true;
    this.userName = this.firebaseUser.email;
    this.emailVerified = this.firebaseUser.emailVerified;
  }


}
