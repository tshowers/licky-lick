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


  constructor(public router: Router,
    public newsService: NewsService,
    private _loginSerive: LickyLoginService) { }

  ngOnInit() {
    this.newSourcesExist();
  }

  onNewsSelect(newsSource): void {
    newsSource.checked = (!newsSource.checked);
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
    this.router.navigate(['/application/news']);
  }


}
