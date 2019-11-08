import { Component, OnInit, OnDestroy, Renderer2  } from '@angular/core';
import { Router } from '@angular/router';
import { Topic } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { Subscription, Observable } from 'rxjs';
import { DataMediationService } from '../../shared/services/data-mediation.service';
import { LickAppWidgetStats7Data } from 'lick-app-widget-stats7';

@Component({
  selector: 'app-topic-dashboard',
  templateUrl: './topic-dashboard.component.html',
  styleUrls: ['./topic-dashboard.component.css']
})
export class TopicDashboardComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  private _topics: Topic[] = [];
  topics: Topic[];
  mostClickedTopcis: Topic[];
  lastUpdatedTopcis: Topic[];
  mostSharedTopcis: Topic[];
  totalRecords: number = 0;
  sharedCount: number = 0;
  draftCount: number = 0;
  deletedCount: number = 0;


  private _topicSubscription: Subscription;

  FAQheadingText = "Topic Dashboard";
  descriptionText = "Welcome to 16AHEAD Knowledge Management. This page, over time, will turn into your knowledge management dashboard. You can also think of this as your knowledge management start page. Once you add topics, this page will show valuable information you should be aware of regarding your knowledge base.";
  faqHeading1 = "Getting Started";
  faqDescription1 = "The application layout should be pretty familiar to you with some slight modifications. At the top is the application menu where you can always navigate back to the home page by clicking the 16AHEAD logo. The left hamburger icon reveals a left side information panel, while the right hamburger icon reveals page help.";
  faqHeading2 = "How to Setup";
  faqDescription2 = "You start gaining value by entering contacts. You do this by clicking the word New above.";
  faqHeading3 = "How to Use";
  faqDescription3 = "Once you enter a topic, you will see your list of all topics where you can page through, edit, view, or mark for deletion.";
  faqHeading4 = "The Secret Sause";
  faqDescription4 = "The magic happens in monitoring the topics in various systems such as your calendar, e-commerce, or the news. 16AHEAD will offer suggestions on topics you should review and why.";

  janCountCreated: number = 0;
  febCountCreated: number = 0;
  marCountCreated: number = 0;
  aprCountCreated: number = 0;
  mayCountCreated: number = 0;
  junCountCreated: number = 0;
  julCountCreated: number = 0;
  augCountCreated: number = 0;
  sepCountCreated: number = 0;
  octCountCreated: number = 0;
  novCountCreated: number = 0;
  decCountCreated: number = 0;

  l_janCountCreated: number = 0;
  l_febCountCreated: number = 0;
  l_marCountCreated: number = 0;
  l_aprCountCreated: number = 0;
  l_mayCountCreated: number = 0;
  l_junCountCreated: number = 0;
  l_julCountCreated: number = 0;
  l_augCountCreated: number = 0;
  l_sepCountCreated: number = 0;
  l_octCountCreated: number = 0;
  l_novCountCreated: number = 0;
  l_decCountCreated: number = 0;

  janCountUpdated: number = 0;
  febCountUpdated: number = 0;
  marCountUpdated: number = 0;
  aprCountUpdated: number = 0;
  mayCountUpdated: number = 0;
  junCountUpdated: number = 0;
  julCountUpdated: number = 0;
  augCountUpdated: number = 0;
  sepCountUpdated: number = 0;
  octCountUpdated: number = 0;
  novCountUpdated: number = 0;
  decCountUpdated: number = 0;

  l_janCountUpdated: number = 0;
  l_febCountUpdated: number = 0;
  l_marCountUpdated: number = 0;
  l_aprCountUpdated: number = 0;
  l_mayCountUpdated: number = 0;
  l_junCountUpdated: number = 0;
  l_julCountUpdated: number = 0;
  l_augCountUpdated: number = 0;
  l_sepCountUpdated: number = 0;
  l_octCountUpdated: number = 0;
  l_novCountUpdated: number = 0;
  l_decCountUpdated: number = 0;


  janCountViewed: number = 0;
  febCountViewed: number = 0;
  marCountViewed: number = 0;
  aprCountViewed: number = 0;
  mayCountViewed: number = 0;
  junCountViewed: number = 0;
  julCountViewed: number = 0;
  augCountViewed: number = 0;
  sepCountViewed: number = 0;
  octCountViewed: number = 0;
  novCountViewed: number = 0;
  decCountViewed: number = 0;

  l_janCountViewed: number = 0;
  l_febCountViewed: number = 0;
  l_marCountViewed: number = 0;
  l_aprCountViewed: number = 0;
  l_mayCountViewed: number = 0;
  l_junCountViewed: number = 0;
  l_julCountViewed: number = 0;
  l_augCountViewed: number = 0;
  l_sepCountViewed: number = 0;
  l_octCountViewed: number = 0;
  l_novCountViewed: number = 0;
  l_decCountViewed: number = 0;

  withNotesCount: number = 0;
  withDescriptionCount: number = 0;
  withSectionCount: number = 0;
  withKeywordsCount: number = 0;
  deletedPercentage: number = 0;
  sharedPercentage: number = 0;
  draftPercentage: number = 0;

  bookmarkedCount: number = 0;
  favoredCount: number = 0;
  broadcastedCount: number = 0;

  data$: Observable<LickAppWidgetStats7Data[]>;
  _data: LickAppWidgetStats7Data[] = [];

  chartLabels;
  chartData1$: Observable<any[]>;
  chartData2$: Observable<any[]>;
  chartData3$: Observable<any[]>;
  subHeadingText;
  headingText = "Activity";

  buttonText1 = "Updated";
  buttonText2 = "New Topics";
  buttonText3 = "Clicked";

  constructor(public dm: DataMediationService, protected renderer2: Renderer2, public router: Router) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this.setBreadCrumb();
    this.dm.doTopics();
    this._topicSubscription = this.dm.topics.subscribe((topics: Topic[]) =>{
      if (topics) {
        this._topics = topics;
        this.setCounts(this._topics);
      }
    })
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/topics/dashboard", active: true },
      { name: "topics", link: "/application/topics", active: false },
      { name: "feed", link: "/application/topics/feed", active: false },
      { name: "new", link: "/application/topics/new", active: false },
    ]
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._topicSubscription)
    this._topicSubscription.unsubscribe();
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onListItem(item) : void {
    this.router.navigate(['application', 'topics', item.id])
  }

  onSearch(value) : void {
    this.router.navigate(['application', 'topics'], {queryParams: { searchArgument: value}})
  }

  private setCounts(topics: Topic[]): void {
    this.totalRecords = topics.length;

    this.doLastUpdatedList(topics);
    this.doMostClickedList(topics);
    this.doMostSharedList(topics);

    // this.dm.sortHelper.sortByName(topics);
    this.deletedCount = topics.filter((topic) => topic.deleted).length;
    this.sharedCount = topics.filter((topic) => topic.shared).length;
    this.draftCount = topics.filter((topic) => topic.draft).length;

    this.deletedPercentage = (this.deletedCount / this.totalRecords) * 100;
    this.sharedPercentage = (this.sharedCount / this.totalRecords) * 100;
    this.draftPercentage = (this.draftCount / this.totalRecords) * 100;


    this.bookmarkedCount = (((topics.filter((topic) => topic.bookmarked).length) / this.totalRecords) *100);
    this.favoredCount = ((topics.filter((topic) => topic.favored).length / this.totalRecords) *100);
    this.broadcastedCount = ((topics.filter((topic) => topic.broadcasted).length / this.totalRecords) * 100);

    this.doTopicCharateristicCounts(topics);
    this.setByMonth(topics);
  }

  private doMostSharedList(topics: Topic[]) : void {
    let data = [];
    for (let i = 0; i < topics.length; i++) {
        if (topics[i].broadcastedCount)
          data.push(topics[i])
    }
    this.dm.sortHelper.sortByBroadcastedCount(data);
    this.mostSharedTopcis = data.slice(0,3);
  }

  private doMostClickedList(topics: Topic[]) : void {
    let data = [];
    for (let i = 0; i < topics.length; i++) {
        if (topics[i].views)
          data.push(topics[i])
    }
    this.dm.sortHelper.sortByViews(data);
    this.mostClickedTopcis = data.slice(0,3);
  }

  private doLastUpdatedList(topics: Topic[]) : void {
    this.dm.sortHelper.sortByLastUpdated(topics);
    this.lastUpdatedTopcis = topics.slice(0,3);
  }

  private doTopicCharateristicCounts(topics: Topic[]) : void {
    this.withNotesCount = topics.filter((topic) => topic.notes).length;
    this.withDescriptionCount = topics.filter((topic) => topic.description).length;
    this.withKeywordsCount = topics.filter((topic) => topic.keywords).length;
    this.withSectionCount = topics.filter((topic) => topic.sections).length;

    this._data = [];
    this.addDataElement("With Notes", this.withNotesCount);
    this.addDataElement("With Description", this.withDescriptionCount);
    this.addDataElement("With Keywords", this.withKeywordsCount);
    this.addDataElement("With Sections", this.withSectionCount);
    this.doData();

  }

  private addDataElement(label, value) : void {
    this._data.push({"label": label, "value": value});
  }

  private setByMonth(topics: Topic[]): void {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear()

    for (let i = 0; i < topics.length; i++) {
      const createDate = (topics[i].timeStamp) ? new Date(topics[i].timeStamp) : null;
      const lastUpdated = (topics[i].lastUpdated) ? new Date(topics[i].lastUpdated) : null;
      const lastViewed = (topics[i].lastViewed) ? new Date(topics[i].lastViewed) : null;

      let createMonth;
      let createYear;
      if (createDate) {
        createMonth = createDate.getMonth();
        createYear = createDate.getFullYear();
      }

      let lastUpdatedMonth;
      let lastUpdatedYear;
      if (lastUpdated) {
        lastUpdatedMonth = lastUpdated.getMonth();
        lastUpdatedYear = lastUpdated.getFullYear();
      }

      let lastViewedMonth;
      let lastViewedYear;
      if (lastViewed) {
        lastViewedMonth = lastViewed.getMonth();
        lastViewedYear = lastViewed.getFullYear();
      }
      this.totalTopicActivity(createMonth, createYear, year, lastUpdatedMonth, lastUpdatedYear, lastViewedMonth, lastViewedYear);
    }
    this.setChartLabels(month, year);
    this.doChartData1(month);
    this.doChartData2(month);
    this.doChartData3(month);
  }

  private totalTopicActivity(createMonth, createYear, year, lastUpdatedMonth, lastUpdatedYear, lastViewedMonth, lastViewedYear) : void {
    if (createYear == year)
      this.doThisYearTotalCreated(createMonth)
    else if (createYear == (year - 1))
      this.doLastYearTotalCreated(createMonth)


    if (lastUpdatedYear == year)
      this.doThisYearTotalUpdated(lastUpdatedMonth)
     else if (lastViewedYear == (year - 1))
      this.doLastYearTotalUpdated(lastUpdatedMonth)


    if (lastViewedYear == year)
      this.doThisYearTotalViewed(lastViewedMonth)
     else if (lastViewedYear == (year - 1))
      this.doLastYearTotalViewed(lastViewedMonth)

  }

  private doThisYearTotalCreated(month): void {
    switch (month) {
      case 0:
        this.janCountCreated++;
        break;
      case 1:
        this.febCountCreated++;
        break;
      case 2:
        this.marCountCreated++;
        break;
      case 3:
        this.aprCountCreated++;
        break;
      case 4:
        this.mayCountCreated++;
        break;
      case 5:
        this.junCountCreated++;
        break;
      case 6:
        this.julCountCreated++
        break;
      case 7:
        this.augCountCreated++;
        break;
      case 8:
        this.sepCountCreated++;
        break;
      case 9:
        this.octCountCreated++;
        break;
      case 10:
        this.novCountCreated++;
        break;
      case 11:
        this.decCountCreated++
        break;
    }
  }

  private doLastYearTotalCreated(month): void {
    switch (month) {
      case 0:
        this.l_janCountCreated++;
        break;
      case 1:
        this.l_febCountCreated++;
        break;
      case 2:
        this.l_marCountCreated++;
        break;
      case 3:
        this.l_aprCountCreated++;
        break;
      case 4:
        this.l_mayCountCreated++;
        break;
      case 5:
        this.l_junCountCreated++;
        break;
      case 6:
        this.l_julCountCreated++
        break;
      case 7:
        this.l_augCountCreated++;
        break;
      case 8:
        this.l_sepCountCreated++;
        break;
      case 9:
        this.l_octCountCreated++;
        break;
      case 10:
        this.l_novCountCreated++;
        break;
      case 11:
        this.l_decCountCreated++
        break;
    }
  }

  private doThisYearTotalUpdated(month): void {
    switch (month) {
      case 0:
        this.janCountUpdated++;
        break;
      case 1:
        this.febCountUpdated++;
        break;
      case 2:
        this.marCountUpdated++;
        break;
      case 3:
        this.aprCountUpdated++;
        break;
      case 4:
        this.mayCountUpdated++;
        break;
      case 5:
        this.junCountUpdated++;
        break;
      case 6:
        this.julCountUpdated++
        break;
      case 7:
        this.augCountUpdated++;
        break;
      case 8:
        this.sepCountUpdated++;
        break;
      case 9:
        this.octCountUpdated++;
        break;
      case 10:
        this.novCountUpdated++;
        break;
      case 11:
        this.decCountUpdated++
        break;
    }
  }

  private doLastYearTotalUpdated(month): void {
    switch (month) {
      case 0:
        this.l_janCountUpdated++;
        break;
      case 1:
        this.l_febCountUpdated++;
        break;
      case 2:
        this.l_marCountUpdated++;
        break;
      case 3:
        this.l_aprCountUpdated++;
        break;
      case 4:
        this.l_mayCountUpdated++;
        break;
      case 5:
        this.l_junCountUpdated++;
        break;
      case 6:
        this.l_julCountUpdated++
        break;
      case 7:
        this.l_augCountUpdated++;
        break;
      case 8:
        this.l_sepCountUpdated++;
        break;
      case 9:
        this.l_octCountUpdated++;
        break;
      case 10:
        this.l_novCountUpdated++;
        break;
      case 11:
        this.l_decCountUpdated++
        break;
    }
  }

  private doThisYearTotalViewed(month): void {
    switch (month) {
      case 0:
        this.janCountViewed++;
        break;
      case 1:
        this.febCountViewed++;
        break;
      case 2:
        this.marCountViewed++;
        break;
      case 3:
        this.aprCountViewed++;
        break;
      case 4:
        this.mayCountViewed++;
        break;
      case 5:
        this.junCountViewed++;
        break;
      case 6:
        this.julCountViewed++
        break;
      case 7:
        this.augCountViewed++;
        break;
      case 8:
        this.sepCountViewed++;
        break;
      case 9:
        this.octCountViewed++;
        break;
      case 10:
        this.novCountViewed++;
        break;
      case 11:
        this.decCountViewed++
        break;
    }
  }

  private doLastYearTotalViewed(month): void {
    switch (month) {
      case 0:
        this.l_janCountViewed++;
        break;
      case 1:
        this.l_febCountViewed++;
        break;
      case 2:
        this.l_marCountViewed++;
        break;
      case 3:
        this.l_aprCountViewed++;
        break;
      case 4:
        this.l_mayCountViewed++;
        break;
      case 5:
        this.l_junCountViewed++;
        break;
      case 6:
        this.l_julCountViewed++
        break;
      case 7:
        this.l_augCountViewed++;
        break;
      case 8:
        this.l_sepCountViewed++;
        break;
      case 9:
        this.l_octCountViewed++;
        break;
      case 10:
        this.l_novCountViewed++;
        break;
      case 11:
        this.l_decCountViewed++
        break;
    }
  }

  private setChartLabels(month, year): void {
    switch (month) {
      case 0:
        this.subHeadingText = "Feb " + (year - 1) + "-Jan " + year;
        this.chartLabels = ['February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January'];
        break;
      case 1:
        this.subHeadingText = "Mar " + (year - 1) + "-Feb " + year;
        this.chartLabels = ['March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February'];
        break;
      case 2:
        this.subHeadingText = "Apr " + (year - 1) + "-Mar " + year;
        this.chartLabels = ['April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March'];
        break;
      case 3:
        this.subHeadingText = "May " + (year - 1) + "-Apr " + year;
        this.chartLabels = ['May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'];
        break;
      case 4:
        this.subHeadingText = "Jun " + (year - 1) + "-May " + year;
        this.chartLabels = ['June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May'];
        break;
      case 5:
        this.subHeadingText = "Jul " + (year - 1) + "-Jun " + year;
        this.chartLabels = ['July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June'];
        break;
      case 6:
        this.subHeadingText = "Aug " + (year - 1) + "-Jul " + year;
        this.chartLabels = ['August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July'];
        break;
      case 7:
        this.subHeadingText = "Sep " + (year - 1) + "-Aug " + year;
        this.chartLabels = ['September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];
        break;
      case 8:
        this.subHeadingText = "Oct " + (year - 1) + "-Sep " + year;
        this.chartLabels = ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'];
        break;
      case 9:
        this.subHeadingText = "Nov " + (year - 1) + "-Oct " + year;
        this.chartLabels = ['November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'];
        break;
      case 10:
        this.subHeadingText = "Dec " + (year - 1) + "-Nov " + year;
        this.chartLabels = ['December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];
        break;
      case 11:
        this.subHeadingText = "Jan " + (year) + "-Dec " + year;
        this.chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        break;
    }
  }

  private doData() : void {
    this.data$ = Observable.create((observer) => {
      observer.next(this._data);
      observer.complete();
    })
  }

  private doChartData1(month) : void {
    this.chartData1$ = Observable.create((observer) => {
      observer.next(this.getMonthsListUpdated(month));
      observer.complete();
    })
  }

  private doChartData2(month) : void {
    this.chartData2$ = Observable.create((observer) => {
      observer.next(this.getMonthsListCreated(month));
      observer.complete();
    })
  }

  private doChartData3(month) : void {
    this.chartData3$ = Observable.create((observer) => {
      observer.next(this.getMonthsListViewed(month));
      observer.complete();
    })
  }

  private getMonthsListCreated(month): number[] {
    let monthArray: number[] = [];
    switch (month) {
      case 0:
        monthArray = [this.l_febCountCreated, this.l_marCountCreated, this.l_aprCountCreated, this.l_mayCountCreated, this.l_junCountCreated, this.l_julCountCreated, this.l_augCountCreated, this.l_sepCountCreated, this.l_octCountCreated, this.l_novCountCreated, this.l_decCountCreated, this.janCountCreated];
        break;
      case 1:
        monthArray = [this.l_marCountCreated,
        this.l_aprCountCreated,
        this.l_mayCountCreated,
        this.l_junCountCreated,
        this.l_julCountCreated,
        this.l_augCountCreated,
        this.l_sepCountCreated,
        this.l_octCountCreated,
        this.l_novCountCreated,
        this.l_decCountCreated,
        this.janCountCreated,
        this.febCountCreated
        ];
        break;
      case 2:
        monthArray = [
          this.l_aprCountCreated,
          this.l_mayCountCreated,
          this.l_junCountCreated,
          this.l_julCountCreated,
          this.l_augCountCreated,
          this.l_sepCountCreated,
          this.l_octCountCreated,
          this.l_novCountCreated,
          this.l_decCountCreated,
          this.janCountCreated,
          this.febCountCreated,
          this.marCountCreated
        ];
        break;
      case 3:
        monthArray = [
          this.l_mayCountCreated,
          this.l_junCountCreated,
          this.l_julCountCreated,
          this.l_augCountCreated,
          this.l_sepCountCreated,
          this.l_octCountCreated,
          this.l_novCountCreated,
          this.l_decCountCreated,
          this.janCountCreated,
          this.febCountCreated,
          this.marCountCreated,
          this.aprCountCreated
        ];
        break;
      case 4:
        monthArray = [
          this.l_junCountCreated,
          this.l_julCountCreated,
          this.l_augCountCreated,
          this.l_sepCountCreated,
          this.l_octCountCreated,
          this.l_novCountCreated,
          this.l_decCountCreated,
          this.janCountCreated,
          this.febCountCreated,
          this.marCountCreated,
          this.aprCountCreated,
          this.mayCountCreated
        ];
        break;
      case 5:
        monthArray = [
          this.l_julCountCreated,
          this.l_augCountCreated,
          this.l_sepCountCreated,
          this.l_octCountCreated,
          this.l_novCountCreated,
          this.l_decCountCreated,
          this.janCountCreated,
          this.febCountCreated,
          this.marCountCreated,
          this.aprCountCreated,
          this.mayCountCreated,
          this.junCountCreated
        ];
        break;
      case 6:
        monthArray = [
          this.l_augCountCreated,
          this.l_sepCountCreated,
          this.l_octCountCreated,
          this.l_novCountCreated,
          this.l_decCountCreated,
          this.janCountCreated,
          this.febCountCreated,
          this.marCountCreated,
          this.aprCountCreated,
          this.mayCountCreated,
          this.junCountCreated,
          this.julCountCreated
        ];
        break;
      case 7:
        monthArray = [
          this.l_sepCountCreated,
          this.l_octCountCreated,
          this.l_novCountCreated,
          this.l_decCountCreated,
          this.janCountCreated,
          this.febCountCreated,
          this.marCountCreated,
          this.aprCountCreated,
          this.mayCountCreated,
          this.junCountCreated,
          this.julCountCreated,
          this.augCountCreated
        ];
        break;
      case 8:
        monthArray = [
          this.l_octCountCreated,
          this.l_novCountCreated,
          this.l_decCountCreated,
          this.janCountCreated,
          this.febCountCreated,
          this.marCountCreated,
          this.aprCountCreated,
          this.mayCountCreated,
          this.junCountCreated,
          this.julCountCreated,
          this.augCountCreated,
          this.sepCountCreated
        ];
        break;
      case 9:
        monthArray = [
          this.l_novCountCreated,
          this.l_decCountCreated,
          this.janCountCreated,
          this.febCountCreated,
          this.marCountCreated,
          this.aprCountCreated,
          this.mayCountCreated,
          this.junCountCreated,
          this.julCountCreated,
          this.augCountCreated,
          this.sepCountCreated,
          this.octCountCreated
        ];
        break;
      case 10:
        monthArray = [
          this.l_decCountCreated,
          this.janCountCreated,
          this.febCountCreated,
          this.marCountCreated,
          this.aprCountCreated,
          this.mayCountCreated,
          this.junCountCreated,
          this.julCountCreated,
          this.augCountCreated,
          this.sepCountCreated,
          this.octCountCreated,
          this.novCountCreated
        ];
        break;
      case 11:
        monthArray = [
          this.janCountCreated,
          this.febCountCreated,
          this.marCountCreated,
          this.aprCountCreated,
          this.mayCountCreated,
          this.junCountCreated,
          this.julCountCreated,
          this.augCountCreated,
          this.sepCountCreated,
          this.octCountCreated,
          this.novCountCreated,
          this.decCountCreated
        ];
        break;
    }
    return monthArray;
  }

  private getMonthsListUpdated(month): number[] {
    let monthArray: number[] = [];
    switch (month) {
      case 0:
        monthArray = [this.l_febCountUpdated,
        this.l_marCountUpdated,
        this.l_aprCountUpdated,
        this.l_mayCountUpdated,
        this.l_junCountUpdated,
        this.l_julCountUpdated,
        this.l_augCountUpdated,
        this.l_sepCountUpdated,
        this.l_octCountUpdated,
        this.l_novCountUpdated,
        this.l_decCountUpdated,
        this.janCountUpdated
        ];
        break;
      case 1:
        monthArray = [this.l_marCountUpdated,
        this.l_aprCountUpdated,
        this.l_mayCountUpdated,
        this.l_junCountUpdated,
        this.l_julCountUpdated,
        this.l_augCountUpdated,
        this.l_sepCountUpdated,
        this.l_octCountUpdated,
        this.l_novCountUpdated,
        this.l_decCountUpdated,
        this.janCountUpdated,
        this.febCountUpdated
        ];
        break;
      case 2:
        monthArray = [
          this.l_aprCountUpdated,
          this.l_mayCountUpdated,
          this.l_junCountUpdated,
          this.l_julCountUpdated,
          this.l_augCountUpdated,
          this.l_sepCountUpdated,
          this.l_octCountUpdated,
          this.l_novCountUpdated,
          this.l_decCountUpdated,
          this.janCountUpdated,
          this.febCountUpdated,
          this.marCountUpdated
        ];
        break;
      case 3:
        monthArray = [
          this.l_mayCountUpdated,
          this.l_junCountUpdated,
          this.l_julCountUpdated,
          this.l_augCountUpdated,
          this.l_sepCountUpdated,
          this.l_octCountUpdated,
          this.l_novCountUpdated,
          this.l_decCountUpdated,
          this.janCountUpdated,
          this.febCountUpdated,
          this.marCountUpdated,
          this.aprCountUpdated
        ];
        break;
      case 4:
        monthArray = [
          this.l_junCountUpdated,
          this.l_julCountUpdated,
          this.l_augCountUpdated,
          this.l_sepCountUpdated,
          this.l_octCountUpdated,
          this.l_novCountUpdated,
          this.l_decCountUpdated,
          this.janCountUpdated,
          this.febCountUpdated,
          this.marCountUpdated,
          this.aprCountUpdated,
          this.mayCountUpdated
        ];
        break;
      case 5:
        monthArray = [
          this.l_julCountUpdated,
          this.l_augCountUpdated,
          this.l_sepCountUpdated,
          this.l_octCountUpdated,
          this.l_novCountUpdated,
          this.l_decCountUpdated,
          this.janCountUpdated,
          this.febCountUpdated,
          this.marCountUpdated,
          this.aprCountUpdated,
          this.mayCountUpdated,
          this.junCountUpdated
        ];
        break;
      case 6:
        monthArray = [
          this.l_augCountUpdated,
          this.l_sepCountUpdated,
          this.l_octCountUpdated,
          this.l_novCountUpdated,
          this.l_decCountUpdated,
          this.janCountUpdated,
          this.febCountUpdated,
          this.marCountUpdated,
          this.aprCountUpdated,
          this.mayCountUpdated,
          this.junCountUpdated,
          this.julCountUpdated
        ];
        break;
      case 7:
        monthArray = [
          this.l_sepCountUpdated,
          this.l_octCountUpdated,
          this.l_novCountUpdated,
          this.l_decCountUpdated,
          this.janCountUpdated,
          this.febCountUpdated,
          this.marCountUpdated,
          this.aprCountUpdated,
          this.mayCountUpdated,
          this.junCountUpdated,
          this.julCountUpdated,
          this.augCountUpdated
        ];
        break;
      case 8:
        monthArray = [
          this.l_octCountUpdated,
          this.l_novCountUpdated,
          this.l_decCountUpdated,
          this.janCountUpdated,
          this.febCountUpdated,
          this.marCountUpdated,
          this.aprCountUpdated,
          this.mayCountUpdated,
          this.junCountUpdated,
          this.julCountUpdated,
          this.augCountUpdated,
          this.sepCountUpdated
        ];
        break;
      case 9:
        monthArray = [
          this.l_novCountUpdated,
          this.l_decCountUpdated,
          this.janCountUpdated,
          this.febCountUpdated,
          this.marCountUpdated,
          this.aprCountUpdated,
          this.mayCountUpdated,
          this.junCountUpdated,
          this.julCountUpdated,
          this.augCountUpdated,
          this.sepCountUpdated,
          this.octCountUpdated
        ];
        break;
      case 10:
        monthArray = [
          this.l_decCountUpdated,
          this.janCountUpdated,
          this.febCountUpdated,
          this.marCountUpdated,
          this.aprCountUpdated,
          this.mayCountUpdated,
          this.junCountUpdated,
          this.julCountUpdated,
          this.augCountUpdated,
          this.sepCountUpdated,
          this.octCountUpdated,
          this.novCountUpdated
        ];
        break;
      case 11:
        monthArray = [
          this.janCountUpdated,
          this.febCountUpdated,
          this.marCountUpdated,
          this.aprCountUpdated,
          this.mayCountUpdated,
          this.junCountUpdated,
          this.julCountUpdated,
          this.augCountUpdated,
          this.sepCountUpdated,
          this.octCountUpdated,
          this.novCountUpdated,
          this.decCountUpdated
        ];
        break;
    }
    return monthArray;
  }

  private getMonthsListViewed(month): number[] {
    let monthArray: number[] = [];
    switch (month) {
      case 0:
        monthArray = [this.l_febCountViewed,
        this.l_marCountViewed,
        this.l_aprCountViewed,
        this.l_mayCountViewed,
        this.l_junCountViewed,
        this.l_julCountViewed,
        this.l_augCountViewed,
        this.l_sepCountViewed,
        this.l_octCountViewed,
        this.l_novCountViewed,
        this.l_decCountViewed,
        this.janCountViewed
        ];
        break;
      case 1:
        monthArray = [this.l_marCountViewed,
        this.l_aprCountViewed,
        this.l_mayCountViewed,
        this.l_junCountViewed,
        this.l_julCountViewed,
        this.l_augCountViewed,
        this.l_sepCountViewed,
        this.l_octCountViewed,
        this.l_novCountViewed,
        this.l_decCountViewed,
        this.janCountViewed,
        this.febCountViewed
        ];
        break;
      case 2:
        monthArray = [
          this.l_aprCountViewed,
          this.l_mayCountViewed,
          this.l_junCountViewed,
          this.l_julCountViewed,
          this.l_augCountViewed,
          this.l_sepCountViewed,
          this.l_octCountViewed,
          this.l_novCountViewed,
          this.l_decCountViewed,
          this.janCountViewed,
          this.febCountViewed,
          this.marCountViewed
        ];
        break;
      case 3:
        monthArray = [
          this.l_mayCountViewed,
          this.l_junCountViewed,
          this.l_julCountViewed,
          this.l_augCountViewed,
          this.l_sepCountViewed,
          this.l_octCountViewed,
          this.l_novCountViewed,
          this.l_decCountViewed,
          this.janCountViewed,
          this.febCountViewed,
          this.marCountViewed,
          this.aprCountViewed
        ];
        break;
      case 4:
        monthArray = [
          this.l_junCountViewed,
          this.l_julCountViewed,
          this.l_augCountViewed,
          this.l_sepCountViewed,
          this.l_octCountViewed,
          this.l_novCountViewed,
          this.l_decCountViewed,
          this.janCountViewed,
          this.febCountViewed,
          this.marCountViewed,
          this.aprCountViewed,
          this.mayCountViewed
        ];
        break;
      case 5:
        monthArray = [
          this.l_julCountViewed,
          this.l_augCountViewed,
          this.l_sepCountViewed,
          this.l_octCountViewed,
          this.l_novCountViewed,
          this.l_decCountViewed,
          this.janCountViewed,
          this.febCountViewed,
          this.marCountViewed,
          this.aprCountViewed,
          this.mayCountViewed,
          this.junCountViewed
        ];
        break;
      case 6:
        monthArray = [
          this.l_augCountViewed,
          this.l_sepCountViewed,
          this.l_octCountViewed,
          this.l_novCountViewed,
          this.l_decCountViewed,
          this.janCountViewed,
          this.febCountViewed,
          this.marCountViewed,
          this.aprCountViewed,
          this.mayCountViewed,
          this.junCountViewed,
          this.julCountViewed
        ];
        break;
      case 7:
        monthArray = [
          this.l_sepCountViewed,
          this.l_octCountViewed,
          this.l_novCountViewed,
          this.l_decCountViewed,
          this.janCountViewed,
          this.febCountViewed,
          this.marCountViewed,
          this.aprCountViewed,
          this.mayCountViewed,
          this.junCountViewed,
          this.julCountViewed,
          this.augCountViewed
        ];
        break;
      case 8:
        monthArray = [
          this.l_octCountViewed,
          this.l_novCountViewed,
          this.l_decCountViewed,
          this.janCountViewed,
          this.febCountViewed,
          this.marCountViewed,
          this.aprCountViewed,
          this.mayCountViewed,
          this.junCountViewed,
          this.julCountViewed,
          this.augCountViewed,
          this.sepCountViewed
        ];
        break;
      case 9:
        monthArray = [
          this.l_novCountViewed,
          this.l_decCountViewed,
          this.janCountViewed,
          this.febCountViewed,
          this.marCountViewed,
          this.aprCountViewed,
          this.mayCountViewed,
          this.junCountViewed,
          this.julCountViewed,
          this.augCountViewed,
          this.sepCountViewed,
          this.octCountViewed
        ];
        break;
      case 10:
        monthArray = [
          this.l_decCountViewed,
          this.janCountViewed,
          this.febCountViewed,
          this.marCountViewed,
          this.aprCountViewed,
          this.mayCountViewed,
          this.junCountViewed,
          this.julCountViewed,
          this.augCountViewed,
          this.sepCountViewed,
          this.octCountViewed,
          this.novCountViewed
        ];
        break;
      case 11:
        monthArray = [
          this.janCountViewed,
          this.febCountViewed,
          this.marCountViewed,
          this.aprCountViewed,
          this.mayCountViewed,
          this.junCountViewed,
          this.julCountViewed,
          this.augCountViewed,
          this.sepCountViewed,
          this.octCountViewed,
          this.novCountViewed,
          this.decCountViewed
        ];
        break;
    }
    return monthArray;
  }


  get diagnostic() {
    return JSON.stringify(this._topics);
  }


}
