import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Contact, Topic } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { Subscription, Observable } from 'rxjs';
import { DataMediationService } from '../../../shared/services/data-mediation.service';

@Component({
  selector: 'app-contact-dashboard',
  templateUrl: './contact-dashboard.component.html',
  styleUrls: ['./contact-dashboard.component.css']
})
export class ContactDashboardComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  private _contacts: Contact[] = [];
  topics: Topic[]

  FAQheadingText = "Contact Dashboard";
  descriptionText = "Welcome to 16AHEAD contacts. This page, over time, will turn into your contact dashboard. You can also think of this as your contact start page. Once you add contacts, this page will show valuable information you should be aware of regarding your contacts.";
  faqHeading1 = "Getting Started";
  faqDescription1 = "The application layout should be pretty familiar to you with some slight modifications. At the top is the application menu where you can always navigate back to the home page by clicking the 16AHEAD logo. The left hamburger icon reveals a left side information panel, while the right hamburger icon reveals page help.";
  faqHeading2 = "How to Setup";
  faqDescription2 = "You start gaining value by entering contacts. You do this by clicking the word New above.";
  faqHeading3 = "How to Use";
  faqDescription3 = "Once you enter a contact, you will see your list of all contacts where you can page through, edit, view, or mark for deletion.";
  faqHeading4 = "The Secret Sause";
  faqDescription4 = "The magic happens in monitoring the contact in various systems such as your calendar, e-commerce, or the news. 16AHEAD will offer suggestions on which people you should contact and why.";
  pieData1$: Observable<any[]>;
  pieLabels1 = [];
  pieData2$: Observable<any[]>;
  pieLabels2 = [];
  totalRecords = 0;

  highlightedContacts: Contact[] = [];
  contactStatusData;
  chartLabels;
  chartData1$: Observable<any[]>;
  chartData2$: Observable<any[]>;
  chartData3$: Observable<any[]>;
  subHeadingText;
  headingText = "Activity";

  buttonText1 = "Updated";
  buttonText2 = "New Contacts";
  buttonText3 = "Viewed";

  companyCount: number = 0;
  sharedCount: number = 0;
  draftCount: number = 0;
  deletedCount: number = 0;

  openCount: number = 0;
  notStartedCount: number = 0;
  onHoldCount: number = 0;
  canceledCount: number = 0;
  expiredCount: number = 0;
  pendingCount: number = 0;
  closedCount: number = 0;
  activeCount: number = 0;
  inActiveCount: number = 0;
  rejectedCount: number = 0;
  approvedCount: number = 0;
  inProgressCount: number = 0;
  completeCount: number = 0;
  planningCount: number = 0;
  ideaCount: number = 0;
  currentCount: number = 0;

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

  private _contactSubscription: Subscription;


  constructor(public dm: DataMediationService, protected renderer2: Renderer2, public router: Router) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this.setBreadCrumb();
    this.dm.doContacts();
    this._contactSubscription = this.dm.contacts.subscribe((contacts: Contact[]) =>{
      if (contacts) {
        this._contacts = contacts;
        this.setCounts(this._contacts);
      }
    })
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/contacts/dashboard", active: true },
      { name: "contacts", link: "/application/contacts", active: false },
      { name: "new", link: "/application/contacts/new", active: false },
    ]
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this._contactSubscription.unsubscribe();
  }

  private setCounts(contacts: Contact[]): void {
    this.dm.sortHelper.sortByLastName(contacts);
    this.totalRecords = contacts.length;
    this.deletedCount = contacts.filter((contact) => contact.deleted).length;
    this.sharedCount = contacts.filter((contact) => contact.shared).length;
    this.draftCount = contacts.filter((contact) => contact.draft).length;
    this.companyCount = contacts.filter((contact) => contact.isCompany).length;
    this.openCount = contacts.filter((contact) => (contact.status && contact.status.toLowerCase() == 'open')).length;
    this.notStartedCount = contacts.filter((contact) => (contact.status && contact.status.toLowerCase() == 'not-started')).length;
    this.onHoldCount = contacts.filter((contact) => (contact.status && contact.status.toLowerCase() == 'on-hold')).length;
    this.canceledCount = contacts.filter((contact) => (contact.status && contact.status.toLowerCase() == 'canceled')).length;
    this.expiredCount = contacts.filter((contact) => (contact.status && contact.status.toLowerCase() == 'expired')).length;
    this.pendingCount = contacts.filter((contact) => (contact.status && contact.status.toLowerCase() == 'pending')).length;
    this.closedCount = contacts.filter((contact) => (contact.status && contact.status.toLowerCase() == 'closed')).length;
    this.activeCount = contacts.filter((contact) => (contact.status && contact.status.toLowerCase() == 'active')).length;
    this.inActiveCount = contacts.filter((contact) => (contact.status && contact.status.toLowerCase() == 'in-active')).length;
    this.rejectedCount = contacts.filter((contact) => (contact.status && contact.status.toLowerCase() == 'rejected')).length;
    this.approvedCount = contacts.filter((contact) => (contact.status && contact.status.toLowerCase() == 'approved')).length;
    this.inProgressCount = contacts.filter((contact) => (contact.status && contact.status.toLowerCase() == 'in-progress')).length;
    this.completeCount = contacts.filter((contact) => (contact.status && contact.status.toLowerCase() == 'complete')).length;
    this.planningCount = contacts.filter((contact) => (contact.status && contact.status.toLowerCase() == 'planning')).length;
    this.ideaCount = contacts.filter((contact) => (contact.status && contact.status.toLowerCase() == 'idea')).length;
    this.currentCount = contacts.filter((contact) => (contact.status && contact.status.toLowerCase() == 'current')).length;
    this.setContactStatusData();
    this.setByMonth(contacts);
    this.setHighlightedContacts(contacts);
    this.setPieChart();
  }

  private setPieChart(): void {
    this.pieData1$ = new Observable((observer) => {
      observer.next([
        ((this.notStartedCount / this.totalRecords) * 100),
        ((this.completeCount / this.totalRecords) * 100),
        ((this.canceledCount / this.totalRecords) * 100),
        ((this.onHoldCount / this.totalRecords) * 100),
      ]);
      observer.complete();
    })
    this.pieData2$ = new Observable((observer) => {
      observer.next([
        ((this.expiredCount / this.totalRecords) * 100),
        ((this.closedCount / this.totalRecords) * 100),
        ((this.planningCount / this.totalRecords) * 100),
        ((this.ideaCount / this.totalRecords) * 100),
      ]);
      observer.complete();
    })
    this.pieLabels1 = ['Not Started', 'Complete', 'Canceled', 'On Hold'];
    this.pieLabels2 = ['Expired', 'Closed', 'Planning', 'Idea'];
  }

  private setHighlightedContacts(contacts: Contact[]): void {
    this.dm.sortHelper.sortByViews(contacts);
    this.highlightedContacts = contacts.slice(-3);
    for (let i = 0; i < this.highlightedContacts.length; i++) {
      if (!this.highlightedContacts[i].url)
        this.highlightedContacts[i].url = "assets/images/default-user.png";
    }
  }

  private setContactStatusData(): void {
    this.contactStatusData = [{
      "count": this.pendingCount,
      "label": "pending",
      "iconClass": "fa fa-id-card"
    }, {
      "count": this.activeCount,
      "label": "active",
      "iconClass": "fa fa-address-card-o"
    }, {
      "count": this.inActiveCount,
      "label": "in active",
      "iconClass": "fa fa-address-card"
    }, {
      "count": this.inProgressCount,
      "label": "in progress",
      "iconClass": "fa fa-spinner"
    }, {
      "count": this.openCount,
      "label": "open",
      "iconClass": "fa fa-user-o"
    }, {
      "count": this.rejectedCount,
      "label": "rejected",
      "iconClass": "fa fa-ban"
    }]
  }

  private setByMonth(contacts: Contact[]): void {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear()

    for (let i = 0; i < contacts.length; i++) {
      const createDate = (contacts[i].timeStamp) ? new Date(contacts[i].timeStamp) : null;
      const lastUpdated = (contacts[i].lastUpdated) ? new Date(contacts[i].lastUpdated) : null;
      const lastViewed = (contacts[i].lastViewed) ? new Date(contacts[i].lastViewed) : null;

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
      this.totalContactActivity(createMonth, createYear, year, lastUpdatedMonth, lastUpdatedYear, lastViewedMonth, lastViewedYear);
    }
    this.setChartLabels(month, year);
    this.doChartData1(month);
    this.doChartData2(month);
    this.doChartData3(month);
  }

  private totalContactActivity(createMonth, createYear, year, lastUpdatedMonth, lastUpdatedYear, lastViewedMonth, lastViewedYear) : void {
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

  onViewContact(contact) : void {
    this.router.navigate(['application', 'contacts', contact.id])
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onSearch(value) : void {
    this.router.navigate(['application', 'contacts'], {queryParams: { searchArgument: value}})
  }

  get diagnostic() {
    return JSON.stringify(this.highlightedContacts);
  }

}
