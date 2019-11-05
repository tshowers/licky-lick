import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { DataMediationService } from '../../shared/services/data-mediation.service';
import { Observable, Subscription } from 'rxjs';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Topic } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { TOPICS } from 'licky-services';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  data$: Observable<any[]>;

  private _topics: Topic[];

  private _topicsOriginal;

  pageSize = 5;

  totalRecords = 0;

  private _searchArgumentSubscription: Subscription;

  private _topicSubscription: Subscription;

  private _paramSubscription: Subscription;

  searchArgument = '';

  deletedTopics: number = 0;
  sharedTopics: number = 0;
  draftTopics: number = 0;
  uploadTopics: number = 0;

  constructor(public dm: DataMediationService, protected renderer2: Renderer2, public router: Router, private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this.setBreadCrumb();
    this.dm.doTopics();
    this._topicSubscription = this.dm.topics.subscribe((topics: Topic[]) => {
      if (topics) {
        this.setCounts(topics);
        this.doDataMassage(topics);
      }
    })

  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._searchArgumentSubscription)
      this._searchArgumentSubscription.unsubscribe();
    if (this._topicSubscription)
      this._topicSubscription.unsubscribe();
  }

  private doDataMassage(topics: Topic[]): void {
    this.data$ = Observable.create((observer) => {
      if (this.isSearch()) {
        this.setSearchResult();
        observer.next(this.dm.db.getRecordsToDisplay(1, this.pageSize, this._topics));
      }
      else
        observer.next(this.dm.db.getRecordsToDisplay(1, this.pageSize, topics));

      observer.complete();
    })

  }

  private setSearchResult(): void {
    if (this.searchArgument != '')
      this._topics = this._topicsOriginal.filter(
        (topic) => {
          return ((topic.name && (topic.name.toLowerCase().indexOf(this.searchArgument) >= 0)) )
        });
    else
      this._topics = this._topicsOriginal;
  }

  private isSearch(): boolean {
    if (this._route.snapshot.queryParams['searchArgument']) {
      this.searchArgument = this._route.snapshot.queryParams['searchArgument'];
      this._searchArgumentSubscription = this._route.queryParams.subscribe(
        (params: Params) => {
          this.searchArgument = this._route.snapshot.queryParams['searchArgument'];
        }
      )
      return true;
    }
    return false;
  }

  private setCounts(topics: Topic[]): void {
    this.dm.sortHelper.sortByName(topics);
    this._topics = topics;
    this._topicsOriginal = topics;
    this.totalRecords = topics.length;
    this.deletedTopics = topics.filter((topic) => topic.deleted).length;
    this.sharedTopics = topics.filter((topic) => topic.shared).length;
    this.draftTopics = topics.filter((topic) => topic.draft).length;
    this.uploadTopics = topics.filter((topic) => (topic && topic.url)).length;
  }

  private setTopics(): void {
    this.dm.doTopics();
    this._topicSubscription = this.dm.topics.subscribe((topics: Topic[]) => {
      if (topics) {
        this.totalRecords = topics.length;
        this._topics = topics;
        this.newPage(1);
      }
    })
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/topics/dashboard", active: false },
      { name: "topics", link: "/application/topics", active: true },
      { name: "new", link: "/application/topics/new", active: false },
    ]
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onNewItem() : void {
    this.router.navigate(['application', 'topics', 'new']);
  }

  newPage(value: number): void {
    this.data$ = Observable.create((observer) => {
      let topics = this.dm.db.getRecordsToDisplay(value, this.pageSize, this._topics);
      observer.next(topics);
      observer.complete();
    })
  }

  onDetail(data): void {
    this.router.navigate(['application', 'topics',  data.id])
  }

  onEdit(data): void {
    this.router.navigate(['application', 'topics', data.id, 'edit'])
  }

  onDelete(data): void {
    data.deleted = true;
    this.dm.db.updateData(TOPICS, data.id, data);
    this.router.navigate(['application', 'topics',  data.id])
  }

  onSearch(value) : void {
    this.router.navigate(['application', 'topics'], {queryParams: { searchArgument: value}})
  }

  get diagnostic() {
    return "Topics=" + this._topics
  }

}
