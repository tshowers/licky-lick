import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-newsletter1',
  templateUrl: './lick-marketing-newsletter1.component.html',
  styles: []
})
export class LickMarketingNewsletter1Component implements OnInit {

  @Input() headingText = "Newsletter";
  @Input() descriptionText = "Totam rem aperiam eaque ipsa, quae ab illo. Aliquid ex ea commodi autem vel eum fugiat, quo voluptas assumenda est.";

  public email;

  constructor() { }

  @Output() pageEvent = new EventEmitter();

  ngOnInit() {
  }

  onPageEvent() : void {
    this.pageEvent.emit();
  }

  onSubmit() {
    console.log("Submit clicked")
  }

}
