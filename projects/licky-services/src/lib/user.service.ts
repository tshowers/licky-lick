import { Injectable } from '@angular/core';
import { User, Contact, Blog, Project, Group, Store, Catalog } from 'lick-data';
import { Subject } from 'rxjs';
import { FirebaseDataService, GROUPS, USERS } from './firebase-data.service';
import * as firebase from 'firebase';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

  private _users: User[];
  usersChanged = new Subject<User[]>();
  userChanged = new Subject<User>();
  blogContext = new Subject<Blog>();
  storeContext = new Subject<Store>();
  contactContext = new Subject<Contact>();
  projectContext = new Subject<Project>();
  catalogContext = new Subject<Catalog>();
  currentContext = new Subject<any>();
  groupChanged = new Subject<Group[]>();
  user: User;
  groups: Group[];
  userRoles: Array<string>;
  userModules: Array<string>;
  private _firebaseUser: firebase.User = null;

  constructor(public db: FirebaseDataService) {
    // this.db.getDataListing(USERS).valueChanges()
    //   .pipe(map((data) => {
    //     data.forEach(data => { User.restoreData(data); })
    //     return data;
    //   }))
    //   .subscribe((data) => {
    //     this._users = data;
    //     this.setGroups();
    //     this.notifyChanged();
    //   });
  }

  public setUser(user: User, authUser: firebase.User): void {
    this.user = user;
    this._firebaseUser = authUser;
    if (this.user) {
      this.userRoles = _.keys(_.get(this.user, 'roles'));
      this.userModules = _.keys(_.get(this.user, 'moduleAccess'));
      this.userChanged.next(this.user);
    }
  }

  public getNewsSources() {
    if (this.user)
      return (this.user.newsSources) ? this.user.newsSources : []
    else
      return [];
  }

  public getNew(): User {
    return new User();
  }

  public getUsers(): User[] {
    return (!this._users) ? [] : this._users.slice();
  }

  public getUser(id: string) {
    return (this._users) ? (this._users.find(a => a.id == id)) : null;
  }

  public addUser(user: User) {
    // this.db.save(USERS, user, user.id);
    this.userChanged.next(this.user);
    this.notifyChanged();
  }

  public update() {
    if (!this.user) return;
    // this.db.updateData(USERS, this._firebaseUser.uid, this.user);
    this.notifyChanged();
  }

  public updateUser(user: User) {
    // this.db.updateData(USERS, this._firebaseUser.uid, user);
    this.notifyChanged();
  }

  public delete() {
    // this.db.deleteData(USERS, this._firebaseUser.uid);
    this.notifyChanged();
  }

  public deleteUser(id: string) {
    // this.db.deleteData(USERS, this._firebaseUser.uid);
    this.notifyChanged();
  }

  public deleteAllUsers() {
    // this.db.deleteAllFromDatabase(USERS);
    this.notifyChanged();
  }

  get canRead(): boolean {
    const allowed = ['admin', 'author', 'reader']
    return this.matchingRole(allowed);
  }

  get canEdit(): boolean {
    const allowed = ['admin', 'author']
    return this.matchingRole(allowed);
  }
  get canDelete(): boolean {
    const allowed = ['admin']
    return this.matchingRole(allowed);
  }


  canLoad(moduleName): boolean {
    const allowed = [moduleName];
    console.log('checking', moduleName, allowed, this.userModules);
    return this.matchingModule(allowed);
  }

  get role(): string {
    if (this.canDelete)
      return "Admin";
    else if (this.canEdit)
      return "Author";
    else if (this.canRead)
      return "View Only";
    else
      return "Restricted";
  }

  private matchingModule(allowedModule): boolean {
    return !_.isEmpty(_.intersection(allowedModule, this.userModules))
  }

  private matchingRole(allowedRoles): boolean {
    return !_.isEmpty(_.intersection(allowedRoles, this.userRoles))
  }

  private notifyChanged() {
    if (this._users) {
      this.usersChanged.next(this._users.slice());
    }
  }

  public setBlogContext(data: Blog) {
    this.blogContext.next(data);
    this.currentContext.next(data);
  }
  public setProjectContext(data: Project) {
    this.projectContext.next(data);
    this.currentContext.next(data);
  }
  public setContactContext(data: Contact) {
    this.contactContext.next(data);
    this.currentContext.next(data);
  }
  public setStoreContext(data: Store) {
    this.storeContext.next(data);
    this.currentContext.next(data);
  }
  public setCatalogContext(data: Catalog) {
    this.catalogContext.next(data);
    this.currentContext.next(data);
  }

  public newContext(data: any): void {
    this.currentContext.next(data);
  }

  public resetContext(): void {
    this.currentContext.next(null);
    this.catalogContext.next(null);
    this.blogContext.next(null);
    this.contactContext.next(null);
    this.storeContext.next(null);
    this.projectContext.next(null);
  }

  private setDeluxePackage(user: User): void {
    user.moduleAccess = {
      help: true,
      tasks: true,
      news: true,
      schedules: true,
      messages: true,
      opportunities: true,
      projects: true,
      stores: true,
      contacts: true,
      documents: true,
      topics: true,
      alerts: true,
      goals: true,
      blog: true,
      settings: true,
      semantics: true,
      properties: true,
    }
  }

  private setDefaultPackage(user: User): void {
    user.moduleAccess = {
      settings: true,
      help: true,
      blog: true,
      messages: true
    }
  }

  private setProjectPackage(user: User): void {
    user.moduleAccess = {
      documents: true,
      projects: true,
      settings: true,
      tasks: true,
      contacts: true,
      help: true,
      blog: true,
      messages: true
    }
  }

  private setModuleAccess(user: User): void {
    // if (CORPORATE_ACCOUNT) {
    //   switch (PACKAGE) {
    //     case DELUXE_PACKAGE:
    //       this.setDeluxePackage(user);
    //       break;
    //     case PROJECT_PACKAGE:
    //       this.setProjectPackage(user);
    //       break;
    //     default:
    //       this.setDefaultPackage(user);
    //       break;
    //   }
    //
    // } else {
    //   user.moduleAccess = { settings: true }
    // }

  }

  private setAppUser(authUser: firebase.User, user: User, referral?: string) {

    // if (authUser.emailVerified)
    //   user.roles = { reader: true, author: true };
    // else
    //   user.roles = { reader: true };

    this.setModuleAccess(user);

    user.lastUpdated = new Date().getTime();
    // user.createDate = user.lastUpdated;
    user.draft = false;
    user.deleted = false;
    user.name = authUser.displayName;
    user.url = authUser.photoURL;
    user.user_id = authUser.uid;
    user.id = authUser.uid;
    user.helpNeeded = true;
    user.newsSources = [];
    user.status = 'online';

    if (referral)
      user.referral = referral;
  }


  public checkUserRoles(authUser: firebase.User, referral?: string) {
    // this.db.getData(USERS, authUser.uid).valueChanges().subscribe(
    //   (user: User) => {
    //     if (user) {
    //       if (!user.roles) {
    //         this.setAppUser(authUser, user, referral);
    //         this.db.updateData(USERS, authUser.uid, user);
    //       }
    //     } else {
    //       let u = new User();
    //       this.setAppUser(authUser, u);
    //       this.db.save(USERS, u, authUser.uid);
    //     }
    //
    //   }
    // )

  }

  private setGroups(): void {
    // this.db.getDataListing(GROUPS)
    //   .valueChanges()
    //   .subscribe((groups: Group[]) => {
    //     this.groups = groups;
    //     this.groupChanged.next(this.groups);
    //   })
  }
}
