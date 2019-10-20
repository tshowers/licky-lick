import { Component, OnInit, OnDestroy, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Message, User, Contact } from 'lick-data';
import { SortHelperService, LickyLoginService, FirebaseDataService, MESSAGES } from 'licky-services';
import { map } from 'rxjs/operators';


@Component({
  selector: 'licky-lick-app-widget-notification-message',
  templateUrl: './lick-app-widget-notification-message.component.html',
  styles: []
})
export class LickAppWidgetNotificationMessageComponent implements OnInit, AfterViewInit {

  messages$: Observable<Message[]>;
  public message: Message = new Message();
  private _userContact: Contact;
  private _user: User;
  maxArticleLength = 30;
  messageSubscription: Subscription;

  public messagesChecked: boolean = false;

  @Input() router: Router;
  @Input() loginService: LickyLoginService;
  @Input() db: FirebaseDataService;

  constructor(private _sortHelperService: SortHelperService, private _cd: ChangeDetectorRef) { }

  ngOnInit() {
    this._user = this.loginService.getUser();
    this.messages$ = this.db.getDataCollection(MESSAGES)
      .pipe(map((messages: Message[]) => {
        if (messages && messages.length)
          this.setUpIndicator(messages);
        else
          this.messagesChecked = true;
        return messages;
      }))
  }

  ngAfterViewInit() {
    // it must be last line
    this._cd.detectChanges();
  }

  ngOnDestroy() {
    if (this.messageSubscription)
      this.messageSubscription.unsubscribe();

  }

  checkingMessages(): void {
    if (!this._user) return
    this._user.messagesLastCheckedDate = new Date().getTime();
    this.toggleIndicator();
    this.loginService.update();
  }

  onSubmit(): void {
    this.newMessage();
  }

  newMessage(): void {
    this.setUserImageForMessage();
    this.db.writeData(MESSAGES, this.message);
    this.onBrandNew();
  }

  setUserImageForMessage() {
    if (this._userContact && this._userContact.url)
      this.message.url = this._userContact.url;
  }

  onBrandNew(): void {
    this.message = new Message();
  }

  private toggleIndicator() {
    this.messages$.subscribe((messages) => {
      this.setUpIndicator(messages)
    })
  }

  private setUpIndicator(messages): void {
    this.messagesChecked = true;
    const lastChecked = this._user.messagesLastCheckedDate;
    for (let i = 0; i < messages.length; i++) {
      if (this.isIndicatorNeeded(messages[i].lastUpdated, lastChecked)) {
        this.messagesChecked = false;
        break;
      }
    }
  }

  private isIndicatorNeeded(value: Date, compareDate: Date): boolean {
    if (!value || !compareDate) return false;
    const lastChecked = new Date(compareDate);
    const messageDate = new Date(value);
    return (messageDate.getTime() > lastChecked.getTime());
  }


}
