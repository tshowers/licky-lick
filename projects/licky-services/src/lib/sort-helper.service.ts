import { Injectable } from '@angular/core';

@Injectable()
export class SortHelperService {

  constructor() { }


  public sortByPublished(data) {
      data.sort((a, b) => {

        var c = new Date(a.publishedAt).getTime();
        var d = new Date(b.publishedAt).getTime();
        return d-c;
        }
      )
  }

  public sortByLastUpdated(data) {
      data.sort(
        (a, b) => {
          if (a.lastUpdated > b.lastUpdated) return -1;

          if (a.lastUpdated < b.lastUpdated) return 1;
          return 0
        }
      )
  }

  public sortByIDDescending(data) {
      data.sort(
        (a, b) => {
          if (a.id > b.id) return -1;

          if (a.id < b.id) return 1;
          return 0
        }
      )
  }


  public sortByLastUpdatedAscending(data) {
      data.sort(
        (a, b) => {
          if (a.lastUpdated > b.lastUpdated) return 1;

          if (a.lastUpdated < b.lastUpdated) return -1;
          return 0
        }
      )
  }

  public sortByName(data) {
      data.sort(
        (a, b) => {
          if (a.name > b.name) return 1;

          if (a.name < b.name) return -1;
          return 0
        }
      )
  }
  // Ascending
  public sortByTempScore(data) {
      data.sort(
        (a, b) => {
          if (a.tempScore > b.tempScore) return 1;

          if (a.tempScore < b.tempScore) return -1;
          return 0
        }
      )
  }

  // Descending
  public sortByBookmarkedCount(data) {
      data.sort(
        (a, b) => {
          if (a.bookmarkedCount > b.bookmarkedCount) return -1;

          if (a.bookmarkedCount < b.bookmarkedCount) return 1;
          return 0
        }
      )
  }

  public sortByFavoredCount(data) {
      data.sort(
        (a, b) => {
          if (a.favoredCount > b.favoredCount) return -1;

          if (a.favoredCount < b.favoredCount) return 1;
          return 0
        }
      )
  }

  public sortByBroadcastedCount(data) {
      data.sort(
        (a, b) => {
          if (a.broadcastedCount > b.broadcastedCount) return -1;

          if (a.broadcastedCount < b.broadcastedCount) return 1;
          return 0
        }
      )
  }



  public sortByViews(data) {
      data.sort(
        (a, b) => {
          if (a.views > b.views) return -1;

          if (a.views < b.views) return 1;
          return 0
        }
      )
  }

  public sortByLastName(data) {
      data.sort(
        (a, b) => {
          if (a.lastName > b.lastName) return 1;

          if (a.lastName < b.lastName) return -1;
          return 0
        }
      )
  }

  public sortByStep(data) {
      data.sort(
        (a, b) => {
          if (a.step > b.step) return 1;

          if (a.step < b.step) return -1;
          return 0
        }
      )
  }

  public isImage(url: string): boolean {
    if (!url) return false;
    if (url.indexOf(".jpg") >= 0)
      return true;
    if (url.indexOf(".jpeg") >= 0)
      return true;
    if (url.indexOf(".png") >= 0)
      return true;
    if (url.indexOf(".gif") >= 0)
      return true;
    return false;
  }

  public isPDF(url: string): boolean {
    if (!url) return false;
    if (url.indexOf(".pdf") >= 0)
      return true;
    return false;
  }


}
