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

}
