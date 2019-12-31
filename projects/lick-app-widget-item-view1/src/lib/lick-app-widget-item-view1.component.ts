import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-item-view1',
  templateUrl: './lick-app-widget-item-view1.component.html',
  styles: []
})
export class LickAppWidgetItemView1Component implements OnInit {

  @Input() data: any;
  @Input() canEdit: boolean = true;
  @Input() canDelete: boolean = true;
  @Input() customButton: boolean = true;
  @Input() details: boolean = true;
  @Input() customButtonText;
  @Input() customButtonIcon = "fa-cart-plus";

  fields = [];

  @Output() editEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();
  @Output() customEvent = new EventEmitter();

  NO_PHOTO = "assets/images/noPhoto.jpg";


  constructor() { }

  ngOnInit() {
    this.setFields();
  }

  private setFields(): void {
    Object.keys(this.data).forEach(e => {
      if ((e != 'description') &&
        (e != 'bookmarked') &&
        (e != 'bookmarkedCount') &&
        (e != 'favored') &&
        (e != 'favoredCount') &&
        (e != 'broadcasted') &&
        (e != 'broadcastedCount') &&
        (e != 'draft') &&
        (e != 'deleted') &&
        (e != 'lastUpdated') &&
        (e != 'timeStamp') &&
        (e != 'lastUpdatedBy') &&
        (e != 'views') &&
        (e != 'lastViewed') &&
        (e != 'sections') &&
        (e != 'shared') &&
        (e != 'user_id') &&
        (e != 'userName') &&
        (e != 'userImage') &&
        (e != 'url') &&
        (e != 'name')) {
        this.fields.push({ 'key': e, 'value': this.data[e] });
      }
    })
  }

  onCustom(item): void {
    this.customEvent.emit(item);
  }

  onEdit(item): void {
    this.editEvent.emit(item);
  }

  onDelete(item): void {
    this.deleteEvent.emit(item);
  }
}
