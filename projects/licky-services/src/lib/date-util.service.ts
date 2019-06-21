import { Injectable } from '@angular/core';

@Injectable()
export class DateUtilService {

  constructor() { }

  dateAdd(date, interval, units) {
    var ret = new Date(date); //don't change original date
    var checkRollover = function() { if (ret.getDate() != date.getDate()) ret.setDate(0); };
    switch (interval.toLowerCase()) {
      case 'year': ret.setFullYear(ret.getFullYear() + units); checkRollover(); break;
      case 'quarter': ret.setMonth(ret.getMonth() + 3 * units); checkRollover(); break;
      case 'month': ret.setMonth(ret.getMonth() + units); checkRollover(); break;
      case 'week': ret.setDate(ret.getDate() + 7 * units); break;
      case 'day': ret.setDate(ret.getDate() + units); break;
      case 'hour': ret.setTime(ret.getTime() + units * 3600000); break;
      case 'minute': ret.setTime(ret.getTime() + units * 60000); break;
      case 'second': ret.setTime(ret.getTime() + units * 1000); break;
      default: ret = undefined; break;
    }
    return ret;
  }

  public getDaysDiff(last, first) {
    return Math.round((last-first)/(1000*60*60*24));
  }

  public addMonth(dt, n) {
    return new Date(dt.setMonth(dt.getMonth() + n))
  }

  public subtractMonth(dt, n) {
    return new Date(dt.setMonth(dt.getMonth() - n))
  }

  public getMonth(month): string {
    switch (month) {
      case 0:
        return 'January';
      case 1:
        return 'Feburary';
      case 2:
        return 'March';
      case 3:
        return 'April';
      case 4:
        return 'May';
      case 5:
        return 'June';
      case 6:
        return 'July';
      case 7:
        return 'August';
      case 8:
        return 'September';
      case 9:
        return 'October';
      case 10:
        return 'November';
      case 11:
        return 'December';
    }

  }
}
