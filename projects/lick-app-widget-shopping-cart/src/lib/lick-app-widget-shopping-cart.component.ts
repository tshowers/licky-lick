import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {ShoppingCart} from 'lick-data';

@Component({
  selector: 'licky-lick-app-widget-shopping-cart',
  templateUrl: './lick-app-widget-shopping-cart.component.html',
  styles: []
})
export class LickAppWidgetShoppingCartComponent implements OnInit {

  @Input() data: ShoppingCart;
  @Input() headingText = "licky-lick-app-widget-shopping-cart";

  @Output() detailEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  @Output() currentPageEvent = new EventEmitter();

  currentPage: number = 1;
  @Input() pageSize: number = 20;
  @Input() totalRecords: number = 0;


  constructor() { }

  ngOnInit() {
    console.log("SHOPPING CART RECEIVED", JSON.stringify(this.data))
  }

  onDetail(item): void {
    console.log("onDetail", JSON.stringify(item))
    this.detailEvent.emit(item);
  }

  onDelete(item): void {
    console.log("onDelete", JSON.stringify(item))
    this.deleteEvent.emit(item);
  }

  updateQuantity(item): void {
    console.log("updateQuantity", JSON.stringify(item))
    this.updateEvent.emit(item);
  }

  public onPageChange(value): void {
    this.currentPage = value;
    this.currentPageEvent.emit(this.currentPage);
  }


}
