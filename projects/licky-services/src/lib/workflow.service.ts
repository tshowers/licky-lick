import { Injectable } from '@angular/core';
import { environment } from '../environment';

export const ALERTS_ICON: string = environment.ALERTS_ICON;
export const BLOG_ICON: string = environment.BLOG_ICON;
export const CALLS_ICON: string = environment.CALLS_ICON;
export const CONTACTS_ICON: string = environment.CONTACTS_ICON;
export const DOCUMENTS_ICON: string = environment.DOCUMENTS_ICON;
export const EMAILS_ICON: string = environment.EMAILS_ICON;
export const FUNNEL_ICON: string = environment.FUNNEL_ICON;
export const GOALS_ICON: string = environment.GOALS_ICON;
export const HELP_ICON: string = environment.HELP_ICON;
export const MESSAGES_ICON: string = environment.MESSAGES_ICON;
export const MODULE_ICON: string = environment.MODULE_ICON;
export const MYLAN_ICON: string = environment.MYLAN_ICON;
export const NEWS_ICON: string = environment.NEWS_ICON;
export const OPPORTUNITY_ICON: string = environment.OPPORTUNITY_ICON;
export const PROJECTS_ICON: string = environment.PROJECTS_ICON;
export const PROPERTY_ICON: string = environment.PROPERTY_ICON;
export const SCHEDULES_ICON: string = environment.SCHEDULES_ICON;
export const SEMANTICS_ICON: string = environment.SEMANTICS_ICON;
export const SETTINGS_ICON: string = environment.SETTINGS_ICON;
export const STORES_ICON: string = environment.STORES_ICON;
export const TASKS_ICON: string = environment.TASKS_ICON;
export const TIMESHEET_ICON: string = environment.TIMESHEET_ICON;
export const TOPICS_ICON: string = environment.TOPICS_ICON;


export const ONBOARDING_PATH = "/app/help";
export const TOPIC_PATH = "/app/topics";
export const CONTACT_PATH = "/app/contacts/dashboard";
export const TASK_PATH = "/app/tasks/dashboard";
export const NEWS_PATH = "/app/news";
export const CALENDAR_PATH = "/app/schedules/calendars";
export const MESSAGING_PATH = "/app/messages";
export const OPPORTUNITY_PATH = "/app/opportunities/dashboard";
export const PROJECT_PATH = "/app/projects/dashboard";
export const E_COMMERCE_PATH = "/app/stores/dashboard";
export const DOCUTTACH_PATH = "/app/documents";
export const ALERT_PATH = "/app/alerts";
export const BLOG_PATH = "/blog/dashboard";
export const DEFAULT_PATH = "/";
export const GOAL_PATH = "/goals";
export const SETTING_PATH = "/settings/settings";
export const SEMANTIC_PATH = "/semantics";
export const PROPERTY_PATH = "/properties/dashboard";

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

export const CHECK_FOR_NEW_LEADS = "Check Leads";
export const ARRANGE_SHOWING = "Arrange Showing";
export const SET_FOLLOW_UP_TASK = "Create Follow Up";
export const SET_UP_INSPECTION_TASK = "Home Inspection";
export const SHARE_CALENDAR_WITH_SELLER_BUYER_AND_AGENT = "Share Appointment";
export const CHECK_FOLLOW_UPS = "Follow Ups";
export const ENTER_OFFER = "Enter Offer";
export const CHECK_TEAM_PERFORMANCE = "Team Performance";
export const CHECK_PROPERTY_SHOWINGS_PER_DAY = "Check Showings";
export const CHECK_SALES_PER_DAY = "Check Sales";
export const ENTER_TIMELINES_AND_INTEREST = "Enter Timeline";
export const CHECK_COMMISSIONS = "Check Commissions";
export const AVERAGE_DAYS_ON_MARKET = "Days on Market";
export const AVERAGE_PRICE_PER_SQUARE_FOOT_PER_LISTING = "SF Pricing";
export const GPS_NEIGHBORHOOD_TRENDS = "Neighborhood";

export const CREATE_FUNNEL = "Lead Funnel";
export const CREATE_CONTACT = "Create Contact";
export const CREATE_TASK = "Create Task";
export const READ_NEWS = "Read News";
export const SCHEDULE_MEETING = "Schedule Meeting";
export const MAKE_CALL = "Make Call";
export const ADD_PROPERTY = "Add Property";
export const CREATE_PROJECT = "Create Project";
export const SEND_EMAIL = "Send an Email";
export const REVIEW_SALES = "Review Sales";
export const ONBOARDING_SETUP = "Employee Orientation";
export const ADD_KNOWLEDGE = "Add Knowledge";
export const UPLOAD_DOC = "Upload Document";
export const CREATE_OPPORTUNITY = "Add Opportunity";
export const WRITE_AN_ARTICLE = "Write Article";
export const CHAT = "Chat";
export const ENTER_GOALS = "Adjust Goals";
export const ENTER_TIME = "Enter Time";
export const CHECK_ALERTS = "Check Alerts";
export const CURRENT_DEALS_TASK = "Deal Task";
export const CREATE_FLYER_TASK = "Flyer Task";
export const CREATE_AD_TASK = "Advertisement Task";
export const CREATE_CALL_TASK = "Call Task";
export const CREATE_EMAIL_TASK = "Email Task";
export const CREATE_NETWORK_TASK = "Network Task";
export const CREATE_APPOINTMENT_TASK = "Appointment Task";
export const CREATE_RESEARCH_TASK = "Research Task";
export const CREATE_PULL_COMPS_TASK = "Pull Comps";
export const CREATE_POST_TASK = "Post Task";
export const CURRENTS_TASK = "Current Tasks";
export const NEW_CONTACT = "New Contact";
export const ADD_A_STORE = "New Store";

@Injectable()
export class WorkflowService {

  public actions = [
    { "path": "contacts", "userActive": true, "hidden": false, "active": false, "route": "/app/contacts/new", "actionName": NEW_CONTACT, "iconClass": "fa fa-address-card-o", "moduleDescription": "Add a new contact to the database", "url": CONTACTS_ICON },
    { "path": "projects", "userActive": true, "hidden": false, "active": false, "route": "/app/projects/new", "actionName": CREATE_PROJECT, "iconClass": "fa fa-check-square-o", "moduleDescription": "Create a new project", "url": PROJECTS_ICON },
    { "path": "opportunities", "userActive": true, "hidden": false, "active": false, "v": "/app/opportunities/funnels", "actionName": CREATE_FUNNEL, "iconClass": "fa fa-filter", "moduleDescription": "Create a new external sales funnel", "url": FUNNEL_ICON },
    { "path": "documents", "userActive": true, "hidden": false, "active": false, "route": "/app/documents/new", "actionName": UPLOAD_DOC, "iconClass": "fa fa-upload", "moduleDescription": "Upload a new document", "url": DOCUMENTS_ICON },
    { "path": "messages", "userActive": true, "hidden": false, "active": false, "route": "/app/messages", "actionName": CHAT, "iconClass": "fa fa-commenting-o", "moduleDescription": "Chat with people logged in", "url": MESSAGES_ICON },
    { "path": "help", "userActive": true, "hidden": false, "active": false, "route": "/app/help/new", "actionName": ONBOARDING_SETUP, "iconClass": "fa fa-question-circle", "moduleDescription": "Setup onboarding steps for a new employee", "url": HELP_ICON },
    { "path": "tasks", "userActive": true, "hidden": false, "active": false, "route": "/app/tasks", "actionName": CURRENTS_TASK, "iconClass": "fa fa-tasks", "moduleDescription": "Check current task", "url": TASKS_ICON },
    { "path": "tasks", "userActive": true, "hidden": false, "active": false, "route": "/app/tasks/new", "actionName": CURRENT_DEALS_TASK, "iconClass": "fa fa-tasks", "moduleDescription": "Create a task to look at current deals", "url": TASKS_ICON },
    { "path": "tasks", "userActive": true, "hidden": false, "active": false, "route": "/app/tasks/new", "actionName": CREATE_FLYER_TASK, "iconClass": "fa fa-tasks", "moduleDescription": "Create a task to create a flyer", "url": TASKS_ICON },
    { "path": "tasks", "userActive": true, "hidden": false, "active": false, "route": "/app/tasks/new", "actionName": CREATE_AD_TASK, "iconClass": "fa fa-tasks", "moduleDescription": "Create a task for creating an Ad", "url": TASKS_ICON },
    { "path": "tasks", "userActive": true, "hidden": false, "active": false, "route": "/app/tasks/new", "actionName": CREATE_CALL_TASK, "iconClass": "fa fa-tasks", "moduleDescription": "Create a task to track a call", "url": TASKS_ICON },
    { "path": "tasks", "userActive": true, "hidden": false, "active": false, "route": "/app/tasks/new", "actionName": CREATE_EMAIL_TASK, "iconClass": "fa fa-tasks", "moduleDescription": "Create a task to track email creation", "url": TASKS_ICON },
    { "path": "tasks", "userActive": true, "hidden": false, "active": false, "route": "/app/tasks/new", "actionName": CREATE_NETWORK_TASK, "iconClass": "fa fa-tasks", "moduleDescription": "Create a task to track networking activities", "url": TASKS_ICON },
    { "path": "tasks", "userActive": true, "hidden": false, "active": false, "route": "/app/tasks/new", "actionName": CREATE_APPOINTMENT_TASK, "iconClass": "fa fa-tasks", "moduleDescription": "Create a task for appointment creation", "url": TASKS_ICON },
    { "path": "tasks", "userActive": true, "hidden": false, "active": false, "route": "/app/tasks/new", "actionName": CREATE_RESEARCH_TASK, "iconClass": "fa fa-tasks", "moduleDescription": "Create a task for researching", "url": TASKS_ICON },
    { "path": "tasks", "userActive": true, "hidden": false, "active": false, "route": "/app/tasks/new", "actionName": CREATE_PULL_COMPS_TASK, "iconClass": "fa fa-tasks", "moduleDescription": "Create a task to track pulling home comparisons", "url": TASKS_ICON },
    { "path": "tasks", "userActive": true, "hidden": false, "active": false, "route": "/app/tasks/new", "actionName": CREATE_POST_TASK, "iconClass": "fa fa-tasks", "moduleDescription": "Create a task for creating a blog post", "url": TASKS_ICON },
    { "path": "contacts", "userActive": true, "hidden": false, "active": false, "route": "/app/contacts/dashboard", "actionName": CHECK_FOR_NEW_LEADS, "iconClass": "fa fa-address-card-o", "moduleDescription": "Check dashboard for new leads", "url": CONTACTS_ICON },
    { "path": "properties", "userActive": true, "hidden": false, "active": false, "route": "/app/schedules/calendars/new", "actionName": ARRANGE_SHOWING, "iconClass": "fa fa-home", "moduleDescription": "Arrange a showing by setting up and calendar event", "url": SCHEDULES_ICON },
    { "path": "tasks", "userActive": true, "hidden": false, "active": false, "route": "/app/tasks/new", "actionName": SET_FOLLOW_UP_TASK, "iconClass": "fa fa-tasks", "moduleDescription": "Create a follow up task", "url": TASKS_ICON },
    { "path": "properties", "userActive": true, "hidden": false, "active": false, "route": "/app/tasks/new", "actionName": SET_UP_INSPECTION_TASK, "iconClass": "fa fa-tasks", "moduleDescription": "Schedule a home inspection on the calendar", "url": TASKS_ICON },
    { "path": "properties", "userActive": true, "hidden": false, "active": false, "route": "/app/schedules", "actionName": SHARE_CALENDAR_WITH_SELLER_BUYER_AND_AGENT, "iconClass": "fa fa-calendar", "moduleDescription": "Share a calendar event with buyer and seller", "url": SCHEDULES_ICON },
    { "path": "tasks", "userActive": true, "hidden": false, "active": false, "route": "/app/tasks/dashboard", "actionName": CHECK_FOLLOW_UPS, "iconClass": "fa fa-address-card-o", "moduleDescription": "See all your follow ups", "url": TASKS_ICON },
    { "path": "contacts", "userActive": true, "hidden": false, "active": false, "route": "/app/properties/offer", "actionName": ENTER_OFFER, "iconClass": "fa fa-money", "moduleDescription": "Enter an offer on a home", "url": PROPERTY_ICON },
    { "path": "opportunities", "userActive": true, "hidden": false, "active": false, "route": "/app/opportunities", "actionName": CHECK_TEAM_PERFORMANCE, "iconClass": "fa fa-line-chart", "moduleDescription": "Check the team's performance", "url": OPPORTUNITY_ICON },
    { "path": "properties", "userActive": true, "hidden": false, "active": false, "route": "/app/properties/dashboard", "actionName": CHECK_PROPERTY_SHOWINGS_PER_DAY, "iconClass": "fa fa-line-chart", "moduleDescription": "Go to dashboard and check property showings", "url": PROPERTY_ICON },
    { "path": "properties", "userActive": true, "hidden": false, "active": false, "route": "/app/properties/timelines", "actionName": ENTER_TIMELINES_AND_INTEREST, "iconClass": "fa fa-address-card-o", "moduleDescription": "Enter the lead's timeline and interest on property", "url": PROPERTY_ICON },
    { "path": "properties", "userActive": true, "hidden": false, "active": false, "route": "/app/properties/commissions", "actionName": CHECK_COMMISSIONS, "iconClass": "fa fa-money", "moduleDescription": "Check potential commissions", "url": PROPERTY_ICON },
    { "path": "properties", "userActive": true, "hidden": false, "active": false, "route": "/app/properties/dashboard", "actionName": AVERAGE_DAYS_ON_MARKET, "iconClass": "fa fa-calendar", "moduleDescription": "Average days property on the market", "url": PROPERTY_ICON },
    { "path": "properties", "userActive": true, "hidden": false, "active": false, "route": "/app/properties/dashboard", "actionName": AVERAGE_PRICE_PER_SQUARE_FOOT_PER_LISTING, "iconClass": "fa fa-money", "moduleDescription": "Properties average price per square foot", "url": PROPERTY_ICON },
    { "path": "properties", "userActive": true, "hidden": false, "active": false, "route": "/app/properties/trends", "actionName": GPS_NEIGHBORHOOD_TRENDS, "iconClass": "fa fa-home", "moduleDescription": "In your current location, check neighborhood trends", "url": PROPERTY_ICON },
    { "path": "properties", "userActive": true, "hidden": false, "active": false, "route": "/app/properties/dashboard", "actionName": CHECK_SALES_PER_DAY, "iconClass": "fa fa-line-chart", "moduleDescription": "Check Sales per day", "url": PROPERTY_ICON },

    { "path": "tasks", "userActive": true, "hidden": false, "active": false, "route": "/app/tasks/new", "actionName": CREATE_TASK, "iconClass": "fa fa-tasks", "moduleDescription": "Create a new task", "url": TASKS_ICON },
    { "path": "schedules", "userActive": true, "hidden": false, "active": false, "route": "/app/schedules/calendars/new", "actionName": SCHEDULE_MEETING, "iconClass": "fa fa-calendar", "moduleDescription": "Schedule a meeting on your calendar", "url": SCHEDULES_ICON },
    { "path": "calls", "userActive": true, "hidden": false, "active": false, "route": "/app/calls/new", "actionName": MAKE_CALL, "iconClass": "fa fa-phone", "moduleDescription": "Make a phone call", "url": CALLS_ICON },
    { "path": "news", "userActive": true, "hidden": false, "active": false, "route": "/app/news", "actionName": READ_NEWS, "iconClass": "fa fa-newspaper-o", "moduleDescription": "See what's going on in the world", "url": NEWS_ICON },
    { "path": "properties", "userActive": true, "hidden": false, "active": false, "route": "/app/properties/new", "actionName": ADD_PROPERTY, "iconClass": "fa fa-home", "moduleDescription": "Add a new property", "url": PROPERTY_ICON },
    { "path": "emails", "userActive": true, "hidden": false, "active": false, "route": "/app/emails/new", "actionName": SEND_EMAIL, "iconClass": "fa fa-envelope-o", "moduleDescription": "Send an email", "url": EMAILS_ICON },
    { "path": "stores", "userActive": true, "hidden": false, "active": false, "route": "/app/stores/dashboard", "actionName": REVIEW_SALES, "iconClass": "fa fa-usd", "moduleDescription": "Review online store sales", "url": STORES_ICON },
    { "path": "stores", "userActive": true, "hidden": false, "active": false, "route": "/app/stores/new", "actionName": ADD_A_STORE, "iconClass": "fa fa-usd", "moduleDescription": "Create an online store", "url": STORES_ICON },
    { "path": "topics", "userActive": true, "hidden": false, "active": false, "route": "/app/topcis/new", "actionName": ADD_KNOWLEDGE, "iconClass": "fa fa-thumb-tack", "moduleDescription": "Add knowledge to the system for future use and searching", "url": TOPICS_ICON },
    { "path": "opportunities", "userActive": true, "hidden": false, "active": false, "route": "/app/opportunities/new", "actionName": CREATE_OPPORTUNITY, "iconClass": "fa fa-bar-chart", "moduleDescription": "Create a new potential sales opportunity", "url": OPPORTUNITY_ICON },
    { "path": "blog", "userActive": true, "hidden": false, "active": false, "route": "/app/blog", "actionName": WRITE_AN_ARTICLE, "iconClass": "fa fa-globe", "moduleDescription": "Write an article for you blog", "url": BLOG_ICON },
    { "path": "goals", "userActive": true, "hidden": false, "active": false, "route": "/app/goals", "actionName": ENTER_GOALS, "iconClass": "fa fa-trophy", "moduleDescription": "Enter company goals", "url": GOALS_ICON },
    { "path": "timesheets", "userActive": true, "hidden": false, "active": false, "route": "/app/timesheets", "actionName": ENTER_TIME, "iconClass": "fa fa-clock-o", "moduleDescription": "Enter time for the week", "url": TIMESHEET_ICON },
    { "path": "alerts", "userActive": true, "hidden": false, "active": false, "route": "/app/alerts", "actionName": CHECK_ALERTS, "iconClass": "fa fa-bell", "moduleDescription": "Check all system alerts", "url": ALERTS_ICON },
  ];

  public default = [
    { "userActive": true, "hidden": false, "active": false, "path": "help", "moduleName": ONBOARDING, "iconClass": "fa fa-question-circle", "moduleDescription": "Integrate a new employee into an organization or create your own help.", "url": HELP_ICON },
    { "userActive": true, "hidden": false, "active": false, "path": "tasks", "moduleName": TASK, "iconClass": "fa fa-tasks", "moduleDescription": "List and describe tasks that pushed to you via our alert feature.", "url": TASKS_ICON },
    { "userActive": true, "hidden": false, "active": false, "path": "news", "moduleName": NEWSPAPER, "iconClass": "fa fa-newspaper-o", "moduleDescription": "Aggregated news related to contacts and/or their companies.", "url": NEWS_ICON },
    { "userActive": true, "hidden": false, "active": false, "path": "schedules", "moduleName": CALENDAR, "iconClass": "fa fa-calendar", "moduleDescription": "See daily activity, meetings and assigned project activities.", "url": SCHEDULES_ICON },
    { "userActive": true, "hidden": false, "active": false, "path": "messages", "moduleName": MESSAGING, "iconClass": "fa fa-commenting-o", "moduleDescription": "Built in inter-application communication.", "url": MESSAGES_ICON },
    { "userActive": true, "hidden": false, "active": false, "path": "opportunities", "moduleName": OPPORTUNITY, "iconClass": "fa fa-bar-chart", "moduleDescription": "Manual and automatic creation and tracking of a potential deals, based on criteria and probability.", "url": OPPORTUNITY_ICON },
    { "userActive": true, "hidden": false, "active": false, "path": "projects", "moduleName": PROJECT, "iconClass": "fa fa-check-square-o", "moduleDescription": "Plan, execute, track, and close the work of a team to achieve specific success criteria.", "url": PROJECTS_ICON },
    { "userActive": true, "hidden": false, "active": false, "path": "stores", "moduleName": E_COMMERCE, "iconClass": "fa fa-credit-card", "moduleDescription": "Showcase products and services, take orders, charge customers.", "url": STORES_ICON },
    { "userActive": true, "hidden": false, "active": false, "path": "contacts", "moduleName": CONTACT, "iconClass": "fa fa-address-card-o", "moduleDescription": "Store and find contact information, such as names, addresses and telephone numbers.", "url": CONTACTS_ICON },
    { "userActive": true, "hidden": false, "active": false, "path": "documents", "moduleName": DOCUTTACH, "iconClass": "fa fa-file-o", "moduleDescription": "Attach documents in context, making documents easier to find and reference.", "url": DOCUMENTS_ICON },
    { "userActive": true, "hidden": false, "active": false, "path": "topics", "moduleName": TOPIC, "iconClass": "fa fa-thumb-tack", "moduleDescription": "Build a searchable knowledge base.", "url": TOPICS_ICON },
    { "userActive": true, "hidden": false, "active": false, "path": "alerts", "moduleName": ALERT, "iconClass": "fa fa-bell", "moduleDescription": "Our AI analyzes the data and informs when actions are needed.", "url": ALERTS_ICON },
    { "userActive": true, "hidden": false, "active": false, "path": "goals", "moduleName": GOAL, "iconClass": "fa fa-trophy", "moduleDescription": "Setup monthly, quarterly, half year or yearly goals to mearsure success.", "url": GOALS_ICON },
    { "userActive": true, "hidden": false, "active": true, "path": "blog", "moduleName": BLOG, "iconClass": "fa fa-globe", "moduleDescription": "Create contextural blog post that relate to all your data.", "url": BLOG_ICON },
    { "userActive": true, "hidden": true, "active": false, "path": "timesheets", "moduleName": TIMESHEET, "iconClass": "fa fa-clock-o", "moduleDescription": "Enter time for projects so you can have an integrated view of project time and cost.", "url": TIMESHEET_ICON },
    { "userActive": true, "hidden": true, "active": false, "path": "emails", "moduleName": EMAIL, "iconClass": "fa fa-envelope-o", "moduleDescription": "Integrated email. Our belief is that you shouldn't have a seperate email system from your critical business applications.", "url": EMAILS_ICON },
    { "userActive": true, "hidden": true, "active": false, "path": "mylan", "moduleName": MY_LAN, "iconClass": "fa fa-desktop", "moduleDescription": "See how the local area network is performing, and check IT hard assets.", "url": MYLAN_ICON },
    { "userActive": true, "hidden": true, "active": true, "path": "settings", "moduleName": SETTING, "iconClass": "fa fa-cogs", "moduleDescription": "Turn on and off modules in the icon panel.", "url": SETTINGS_ICON },
    { "userActive": true, "hidden": true, "active": true, "path": "semantics", "moduleName": SEMANTIC, "iconClass": "fa fa-caret-square-o-down", "moduleDescription": "Edit items in dropdown menus to fit industry nomenclature.", "url": SEMANTICS_ICON },
    { "userActive": true, "hidden": false, "active": false, "path": "properties", "moduleName": PROPERTY, "iconClass": "fa fa-home", "moduleDescription": "Improved real estate oversight. Reporting tools give managers insight into the sales pipeline.", "url": PROPERTY_ICON },
  ];

  constructor() { }

  // setCurrentStep(authService: AuthService, moduleName: string): void {
  //   console.log("setCurrentStep", moduleName)
  //   this.setTheStep(authService, moduleName);
  // }
  //
  // setStepToBegining(authService: AuthService): void {
  //   this.setStepToZero(authService);
  //   this.updateUser(authService);
  //   console.log("setStepToBegining ", authService.userService.user.currentStepName);
  // }
  //
  // getWorkFlowName(authService: AuthService): string {
  //   if (authService.userService.user && authService.userService.user.workflow && authService.userService.user.currentStepName) {
  //     let at = authService.userService.user.workflow.findIndex((w) => w.moduleName.toLowerCase() == authService.userService.user.currentStepName.toLowerCase());
  //     return this.getTheNextModuleName(authService, at);
  //   }
  //   return 'settings';
  // }
  //
  // getNextWorkFlowName(authService: AuthService): string {
  //   if (authService.userService.user && authService.userService.user.workflow && authService.userService.user.currentStepName) {
  //     let currentStep = authService.userService.user.currentStepName;
  //     let at = authService.userService.user.workflow.findIndex((w) => w.moduleName.toLowerCase() == currentStep.toLowerCase());
  //     console.log("getNextWorkFlowName", at, currentStep);
  //     return authService.userService.user.workflow[at].moduleName;
  //   }
  //   return 'settings';
  // }
  //
  // getNext(authService: AuthService, firstStep?: boolean): string {
  //   if (!authService.userService && !authService.userService.user) return;
  //
  //   if (firstStep)
  //     return this.setStepToStartUp(authService);
  //   else
  //     return this.setTheNextModule(authService);
  //
  // }
  //
  // private setTheStep(authService: AuthService, moduleName: string) {
  //   console.log("setTheStep", authService.userService.user, moduleName);
  //   if (authService.userService && authService.userService.user) {
  //     if (!authService.userService.user.workflow) return;
  //     if (!moduleName) return;
  //     authService.userService.user.currentStepName = moduleName;
  //     this.updateUser(authService);
  //     console.log("user and module ", authService.userService.user, moduleName);
  //   }
  // }
  //
  // private updateUser(authService: AuthService): void {
  //   authService.userService.update();
  // }
  //
  // private setTheNextModule(authService: AuthService): string {
  //   if (authService.userService.user && authService.userService.user.workflow && authService.userService.user.currentStepName) {
  //     let at = authService.userService.user.workflow.findIndex((w) => w.moduleName.toLowerCase() == authService.userService.user.currentStepName.toLowerCase());
  //     let m = this.getTheNextModuleName(authService, at);
  //
  //     console.log(">>>>>>>>>>>>>at and nextModule", at, m);
  //     return this.getPath(m, authService);
  //   }
  //   return 'settings/settings';
  // }
  //
  // private getTheNextModuleName(authService: AuthService, at): string {
  //   let m;
  //   if (at > (authService.userService.user.workflow.length - 1)) {
  //     m = authService.userService.user.workflow[0].moduleName
  //   }
  //   else {
  //     // m = authService.userService.user.workflow[at + 1].moduleName
  //     m = this.getNextActiveModule(authService, at +1);
  //     console.log("getTheNextModuleName", m)
  //   }
  //   return m;
  // }
  //
  // private getNextActiveModule(authService: AuthService, at) : string {
  //   let workflows = authService.userService.user.workflow;
  //   for (let i = at; i < workflows.length; i++) {
  //     console.log("comparing", workflows[i].moduleName, workflows[i].hidden)
  //     if (!workflows[i].hidden)
  //       return workflows[i].moduleName;
  //   }
  //   return authService.userService.user.workflow[0];
  // }
  //
  // private setStepToStartUp(authService: AuthService): string {
  //   // console.log("setStepToStartUp", authService.userService.user.workflow);
  //   if (authService.userService.user && authService.userService.user.workflow && authService.userService.user.currentStepName) {
  //     let m = authService.userService.user.workflow[0].moduleName;
  //     console.log("set step to Zero !!!!!!!!!!!current and nextModule", authService.userService.user.currentStepName, m);
  //     return this.getPath(m, authService);
  //   }
  //   return 'settings/settings';
  // }
  //
  // private setStepToZero(authService: AuthService): string {
  //   if (authService.userService.user && authService.userService.user.workflow && authService.userService.user.currentStepName) {
  //     let m = authService.userService.user.currentStepName = authService.userService.user.workflow[authService.userService.user.workflow.length - 1].moduleName;
  //     // let m = authService.userService.user.workflow[0 + 1].moduleName;
  //     console.log("set step to End !!!!!!!!!!!current and nextModule", authService.userService.user.currentStepName, m);
  //     return this.getPath(m, authService);
  //   }
  //   return 'settings/settings';
  // }
  //
  // private getPath(module: string, authService: AuthService, firstStep?: boolean): string {
  //   console.log("returning path to next module", module)
  //   switch (module) {
  //     case ONBOARDING:
  //       return ONBOARDING_PATH;
  //     case TASK:
  //       return TASK_PATH;
  //     case SETTING:
  //       return SETTING_PATH;
  //     case SEMANTIC:
  //       return SEMANTIC_PATH;
  //     case GOAL:
  //       return GOAL_PATH;
  //     case NEWSPAPER:
  //       return NEWS_PATH;
  //     case CALENDAR:
  //       return CALENDAR_PATH;
  //     case MESSAGING:
  //       return MESSAGING_PATH;
  //     case OPPORTUNITY:
  //       return OPPORTUNITY_PATH;
  //     case PROJECT:
  //       return PROJECT_PATH;
  //     case E_COMMERCE:
  //       return E_COMMERCE_PATH;
  //     case CONTACT:
  //       return CONTACT_PATH;
  //     case DOCUTTACH:
  //       return DOCUTTACH_PATH;
  //     case TOPIC:
  //       return TOPIC_PATH;
  //     case ALERT:
  //       return ALERT_PATH;
  //     case BLOG:
  //       return BLOG_PATH;
  //     case PROPERTY:
  //       return PROPERTY_PATH;
  //     default:
  //       return DEFAULT_PATH;
  //   }
  // }
  //
  // public getPageNameBasedonPath(path): string {
  //   switch (path) {
  //     case ONBOARDING_PATH:
  //       return ONBOARDING;
  //     case TASK_PATH:
  //       return TASK;
  //     case SETTING_PATH:
  //       return SETTING;
  //     case SEMANTIC_PATH:
  //       return SEMANTIC;
  //     case GOAL_PATH:
  //       return GOAL;
  //     case NEWS_PATH:
  //       return NEWSPAPER;
  //     case CALENDAR_PATH:
  //       return CALENDAR;
  //     case MESSAGING_PATH:
  //       return MESSAGING;
  //     case OPPORTUNITY_PATH:
  //       return OPPORTUNITY;
  //     case PROJECT_PATH:
  //       return PROJECT;
  //     case E_COMMERCE_PATH:
  //       return E_COMMERCE;
  //     case CONTACT_PATH:
  //       return CONTACT;
  //     case DOCUTTACH_PATH:
  //       return DOCUTTACH;
  //     case TOPIC_PATH:
  //       return TOPIC;
  //     case ALERT_PATH:
  //       return ALERT;
  //     case BLOG_PATH:
  //       return BLOG;
  //     case PROPERTY_PATH:
  //       return PROPERTY;
  //     default:
  //       return '';
  //   }
  // }
}
