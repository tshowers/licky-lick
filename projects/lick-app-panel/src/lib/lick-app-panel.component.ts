import { Component, OnInit, Input } from '@angular/core';

export const ONBOARDING = "Onboarding";
export const TASK = "Task Assistant";
export const NEWSPAPER = "News";
export const CALENDAR = "Calendar";
export const MESSAGING = "Messaging";
export const OPPORTUNITY = "Opportunity";
export const PROJECT = "Project";
export const E_COMMERCE = "e-Commerce";
export const CONTACT = "Contact";
export const DOCUTTACH = "Docuttach";
export const TOPIC = "Knowledge Management";
export const ALERT = "Alerts";
export const BLOG = "Blog";
export const TIMESHEET = "Time Card";
export const EMAIL = "Email";
export const MY_LAN = "My LAN";
export const GOAL = "Goals";
export const SETTING = "Settings";
export const SEMANTIC = "Semantics";
export const PROPERTY = "Property";

@Component({
  selector: 'licky-lick-app-panel',
  templateUrl: './lick-app-panel.component.html',
  styles: []
})


export class LickAppPanelComponent implements OnInit {

  public effect;

  private _effects = [
    'ih-item circle effect7 left_to_right',
    'ih-item circle effect11 left_to_right',
    'ih-item circle effect14 left_to_right',
    'ih-item circle effect15 scale_up',
    'ih-item circle effect16 left_to_right',
    'ih-item circle effect17 left_to_right',
    'ih-item circle effect18 left_to_right',
  ]

  public applications = [
    { "userActive": true, "hidden": false, "active": false, "path": "tasks", "appName": TASK, "iconClass": "fa fa-tasks", "appDescription": "List and describe tasks that pushed to you via our alert feature.", "url": 'https://firebasestorage.googleapis.com/v0/b/addieprod.appspot.com/o/app-images%2Ftasks.png?alt=media&token=6bca3b0f-d7cc-45b6-87b0-604f995b17e3' },
    { "userActive": true, "hidden": false, "active": false, "path": "news", "appName": NEWSPAPER, "iconClass": "fa fa-newspaper-o", "appDescription": "Aggregated news related to contacts and/or their companies.", "url": 'https://firebasestorage.googleapis.com/v0/b/addieprod.appspot.com/o/app-images%2Fnews.png?alt=media&token=020b3456-147c-47f2-b00b-ced395481a03' },
    { "userActive": true, "hidden": false, "active": false, "path": "schedules", "appName": CALENDAR, "iconClass": "fa fa-calendar", "appDescription": "See daily activity, meetings and assigned project activities.", "url": 'https://firebasestorage.googleapis.com/v0/b/addieprod.appspot.com/o/app-images%2Fschedules.png?alt=media&token=fb26632d-a569-4d76-a6de-15d07ab2fe31' },
    { "userActive": true, "hidden": false, "active": false, "path": "messages", "appName": MESSAGING, "iconClass": "fa fa-commenting-o", "appDescription": "Built in inter-application communication.", "url": 'https://firebasestorage.googleapis.com/v0/b/addieprod.appspot.com/o/app-images%2Fmessages.png?alt=media&token=1f36124f-8070-4b9e-9cf0-67d7bbc97d47' },
    { "userActive": true, "hidden": false, "active": false, "path": "opportunities", "appName": OPPORTUNITY, "iconClass": "fa fa-bar-chart", "appDescription": "Manual and automatic creation and tracking of a potential deals, based on criteria and probability.", "url": 'https://firebasestorage.googleapis.com/v0/b/addieprod.appspot.com/o/app-images%2Fopportunities.png?alt=media&token=3bf25a60-5cfc-45af-a400-e04d6a766d03' },
    { "userActive": true, "hidden": false, "active": false, "path": "projects", "appName": PROJECT, "iconClass": "fa fa-check-square-o", "appDescription": "Plan, execute, track, and close the work of a team to achieve specific success criteria.", "url": 'https://firebasestorage.googleapis.com/v0/b/addieprod.appspot.com/o/app-images%2Fprojects.png?alt=media&token=ef8ca153-b92f-450c-92f7-d5ea6260ff8e' },
    { "userActive": true, "hidden": false, "active": false, "path": "stores", "appName": E_COMMERCE, "iconClass": "fa fa-credit-card", "appDescription": "Showcase products and services, take orders, charge customers.", "url": 'https://firebasestorage.googleapis.com/v0/b/addieprod.appspot.com/o/app-images%2Fstores.png?alt=media&token=a5fcc5e6-1afe-4e18-b1bd-fa40d9847b9e' },
    { "userActive": true, "hidden": false, "active": false, "path": "contacts", "appName": CONTACT, "iconClass": "fa fa-address-card-o", "appDescription": "Store and find contact information, such as names, addresses and telephone numbers.", "url": 'https://firebasestorage.googleapis.com/v0/b/addieprod.appspot.com/o/app-images%2Fcontacts.png?alt=media&token=6826e77c-d235-4d6f-b826-192994845f4c' },
    { "userActive": true, "hidden": true, "active": false, "path": "emails", "appName": EMAIL, "iconClass": "fa fa-envelope-o", "appDescription": "Integrated email. Our belief is that you shouldn't have a seperate email system from your critical business applications.", "url": 'https://firebasestorage.googleapis.com/v0/b/addieprod.appspot.com/o/app-images%2Femails.png?alt=media&token=608ad3e8-5173-49ab-aa58-d2b08dc0aa2e' },
    { "userActive": true, "hidden": false, "active": false, "path": "properties", "appName": PROPERTY, "iconClass": "fa fa-home", "appDescription": "Improved real estate oversight. Reporting tools give managers insight into the sales pipeline.", "url": 'https://firebasestorage.googleapis.com/v0/b/addieprod.appspot.com/o/app-images%2Fproperties.png?alt=media&token=71f820d6-8df3-4f64-bc44-650144153c5f' },
  ];

  constructor() { }

  ngOnInit() {
    this.effect = this._effects[  Math.floor(Math.random() * (this._effects.length - 1))];
  }

}
