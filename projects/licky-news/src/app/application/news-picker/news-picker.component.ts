import { Component, OnInit } from '@angular/core';
import { NewsService, LickyLoginService } from 'licky-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-picker',
  templateUrl: './news-picker.component.html',
  styleUrls: ['./news-picker.component.css']
})
export class NewsPickerComponent implements OnInit {

  newsSources;
  isDisabled : boolean = false;
  numberChecked: number = 0;

  constructor(public router: Router,
    public newsService: NewsService,
    private _loginSerive: LickyLoginService) { }

  ngOnInit() {
    this.newSourcesExist();
    this.setCountSelected();
  }

  onNewsSelect(checkbox, newsSource): void {
    newsSource.checked = (!newsSource.checked);
    if (this.isOverCount()) {
      newsSource.checked = false;
      checkbox.srcElement.checked = false;
      this.setCountSelected();
    };
  }


  private newSourcesExist() {
    if (this._loginSerive.getUser().newsSources && (this._loginSerive.getUser().newsSources.length > 0))
      this.newsSources = this._loginSerive.getUser().newsSources;
    else
      this.newsSources = this.newsService.newsSources;
  }

  onSubmit(): void {
    this._loginSerive.getUser().newsSources = this.newsSources;
    this._loginSerive.update();
    this.router.navigate(['application', 'news']);
  }

  onReset() : void {
    this.newsSources.forEach((newsSource) => {
      newsSource.checked = false;
    });
    this.setCountSelected();
  }

  private setCountSelected() : void {
    this.numberChecked = 0;
    this.newsSources.forEach((newsSource) => {
      if (newsSource.checked)
        this.numberChecked++;
    })
  }

  private isOverCount() : boolean {
    this.setCountSelected();
    return (this.numberChecked > 10);
    // if (this.numberChecked >= 10) this.isDisabled = true;
  }


}
