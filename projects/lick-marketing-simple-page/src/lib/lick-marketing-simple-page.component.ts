import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-simple-page',
  templateUrl: './lick-marketing-simple-page.component.html',
  styles: []
})
export class LickMarketingSimplePageComponent implements OnInit {

  @Input() bodyText = '<p>Sunt, explicabo dicta sunt, explicabo consequuntur. Deleniti atque corrupti, quos dolores et aut perferendis doloribus asperiores. Beatae vitae dicta sunt, explicabo quasi architecto beatae. Nulla vero eos et quasi architecto beatae vitae dicta. Quisquam est, omnis voluptas nulla vero eos et accusamus. Dolore magnam aliquam quaerat voluptatem accusantium doloremque laudantium, totam rem aperiam. Perspiciatis, unde omnis iste natus nihil molestiae consequatur, vel illum.</p>'
  @Input() author;
  @Input() description;
  @Input() publishedAt;
  @Input() source;
  @Input() article;

  @Output() pageEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onPageEvent() : void {
    this.pageEvent.emit(this.article);
  }

}
