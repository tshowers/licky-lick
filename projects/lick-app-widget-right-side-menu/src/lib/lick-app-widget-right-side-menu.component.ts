import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'licky-lick-app-widget-right-side-menu',
  templateUrl: './lick-app-widget-right-side-menu.component.html',
  styles: []
})
export class LickAppWidgetRightSideMenuComponent implements OnInit {

  @Input() panelHeaderText = "Service Panel";
  @Input() helpHeaderText = "How to Use";
  @Input() descriptionText = "Quis nostrum exercitationem ullam corporis suscipit. Unde omnis voluptas sit, aspernatur aut fugit. Omnis voluptas nulla vero eos similique sunt in ea commodi et harum quidem rerum necessitatibus saepe.";
  @Input() header1 = "DOWNLOAD AND INSTALL";
  @Input() description1 = "Voluptatem, quia dolor repellendus iusto odio dignissimos ducimus, qui. Adipisci velit, sed quia voluptas assumenda est.";
  @Input() header2 = "SETUP THE APPLICATION";
  @Input() description2 = "Rerum hic tenetur a sapiente delectus, ut perspiciatis, unde odio omnis dolor. Sint, obcaecati cupiditate non provident.";
  @Input() header3 = "KEEP CALM AND USE";
  @Input() description3 = "Quidem rerum unde facilis est eligendi. Numquam eius odiotempora. Ducimus, qui quis nostrum exercitationem ullam.";

  constructor() { }

  ngOnInit() {
  }

}
