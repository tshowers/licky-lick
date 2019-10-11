import { Injectable } from '@angular/core';
import { Message } from 'lick-data';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs'
import * as firebase from 'firebase';
import { take } from 'rxjs/operators';

@Injectable()
export class MessageService {

  public messageChanged = new Subject<Message>();

  messaging = firebase.messaging();

  currentMessage = new BehaviorSubject(null);

  constructor() { }

  getPermission() {
    this.messaging.requestPermission()
      .then(() => {
        console.info('Notification permission granted.');
        return this.messaging.getToken()
      })
      .then(token => {
        this.updateToken(token)
      })
      .catch((err) => {
        console.error('Unable to get permission to notify.', err);
      });
  }

  receiveMessage() {
    this.messaging.onMessage((payload) => {
      console.log("Message received. ", payload);
      this.currentMessage.next(payload)
    });
  }

  createNotification(item: any) {

  }

  private updateToken(token) {
    // this._afAuth.authState.pipe(take(1)).subscribe(user => {
    //   if (!user) return;
    //
    //   const data = { [user.uid]: token }
    //   this._db.object('fcmTokens/').update(data)
    // })
  }
}
