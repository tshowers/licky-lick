import { Injectable } from '@angular/core';
import { FirebaseDataService, TASKS, APPROVALS } from './firebase-data.service';

import { Group } from 'lick-data';
import { take } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable()
export class DataIntermediaryService {

  private groups: Group[];

  constructor(public db: FirebaseDataService) {
    this.setGroups();
  }

  setGroups(): void {
    // this.groups = this.authService.userService.groups;
  }

  // public getDataListing(db: FirebaseDataService, authService: AuthService, dataPath: string, keyField?: string, key?: any) {
  //   return this.getTheListingByKey(db, authService, dataPath, keyField, key)
  // }
  //
  // public filterList(authService: AuthService, data) {
  //   return this.filterTeamList(authService, data);
  // }
  //
  // private isOpenView(user_id: string): boolean {
  //   let user = this.authService.userService.getUser(user_id);
  //   return (user && user.openView) ? user.openView : false;
  // }
  //
  // public getFiltered(authService: AuthService, data) {
  //   return this.filterTeamList(authService, data);
  // }
  //
  // private isOnTeam(authService: AuthService, dataItem, userID): boolean {
  //   let dataTeamUsers = this.groups.filter((team) => { return team.user_id == dataItem.user_id })
  //     .map((team) => { if (team.members) return team.members.map((member) => { return member.user_id }) })
  //     .reduce((group, members) => {
  //       return group.concat(members)
  //     }, [])
  //
  //   let x = dataTeamUsers.findIndex(member => member == userID);
  //   return (x >= 0);
  // }


  // private getTheListingByKey(db: FirebaseDataService, authService: AuthService, dataPath: string, keyField?: string, key?: any) {
  //   return (keyField && key) ?
  //     db.getDataListingByKey(dataPath + authService.getDataPrefix(), keyField, key)
  //       .valueChanges()
  //       .pipe(take(1))
  //       .pipe(map(data => {
  //         console.log("getDataListingByKey", data)
  //         this.filterList(authService, data);
  //         return data
  //       }))
  //
  //     :
  //     db.getDataListing(dataPath + authService.getDataPrefix())
  //       .valueChanges()
  //       .pipe(take(1))
  //       .pipe(map((data) => {
  //         console.log("getDataListing", data)
  //         this.filterList(authService, data);
  //         return data;
  //       }))
  // }
  //
  //
  // private getApprovers(db: FirebaseDataService, authService: AuthService, project_id: string) {
  //   return db.getDataListing(APPROVALS + authService.getDataPrefix() + '/' + project_id).valueChanges()
  // }
  //
  // private getTasks(db: FirebaseDataService, authService: AuthService, project_id: string) {
  //   return db.getDataListingByKey(TASKS + authService.getDataPrefix(), "project_id", project_id).valueChanges()
  // }
  //
  // public filterTeamList(authService: AuthService, data) {
  //   const userID = authService.getUserID();
  //   const isAdministrator = (authService.userService && authService.userService.user && authService.userService.canDelete);
  //
  //   let filtered = data
  //     .map((dataItem) => {
  //       const isPublic = (!dataItem.draft && !dataItem.deleted);
  //       if (isAdministrator) {
  //         console.log("ADMINISTRATOR", authService.userService.canDelete)
  //         return dataItem
  //       }
  //       else if (dataItem.user_id == userID) {
  //         console.log("IT'S USERS DATA", dataItem.user_id, userID)
  //         return dataItem
  //       }
  //       else if (this.isOpenView(dataItem.user_id)) {
  //         console.log("OWNER HAS OPEN DATA")
  //         return dataItem
  //       }
  //       else if ((dataItem.approver == userID)) {
  //         console.log("USER IS APPROVER", dataItem.approver, userID)
  //         return dataItem
  //       }
  //       else if ((dataItem.assigned_to_id == userID)) {
  //         console.log("USER IS ASSIGNED", dataItem.assigned_to_id, userID)
  //         return dataItem
  //       }
  //       else if (this.isOnTeam(authService, dataItem, userID)) {
  //         console.log("ON THE TEAM")
  //         return dataItem;
  //       }
  //       else if (isPublic) {
  //         console.log("NOT PRIVATE AND NOT DELETED", dataItem.draft, dataItem.deleted)
  //         return dataItem
  //       }
  //     })
  //   console.log("ALL", filtered)
  //   return data
  // }
}
