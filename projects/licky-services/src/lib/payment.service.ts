import { Injectable } from '@angular/core';
import { PAYMENTS, USERS } from './firebase-data.service';

@Injectable()
export class PaymentService {


  constructor() {

  }

  processPayment(token: any, item: any) {
    // const thePath = USERS + '/' + this._authService.getUserID() + "/moduleAccess/" + item.path
    // return this._db.object(thePath)
    //   .update({token: token.id})
  }

  processStorePayment(token: any, amount) {
    // const payment = {token, amount}
    // return this._db.list(PAYMENTS + '/' +  this._authService.getUserID()).push(payment);
    //
  }

}
