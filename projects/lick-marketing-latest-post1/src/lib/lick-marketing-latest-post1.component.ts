import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'licky-lick-marketing-latest-post1',
  templateUrl: './lick-marketing-latest-post1.component.html',
  styles: []
})
export class LickMarketingLatestPost1Component implements OnInit {

  @Input() headingText = "licky-lick-marketing-latest-post1";
  @Input() descriptionText = "Impedit, quo voluptas nulla vero. Quisquam est, omnis voluptas sit, amet, consectetur, adipisci velit, sed quia. Ratione voluptatem sequi nesciunt, neque porro quisquam est omnis.";
  @Input() defaultImage = "assets/images/noPhoto.jpg";
  @Input() articles: any[] = [
    {
      "id": Math.floor(Math.random() * 1000).toString(),
      "title": "Lose These 12 Bad Habits If You're Serious About Becoming a Millionaire",
      "name": "Lose These 12 Bad Habits If You're Serious About Becoming a Millionaire",
      "link": "/",
      "publishedAt": new Date(),
      "badge": null,
      "blog_id": Math.floor(Math.random() * 1000).toString(),
      "description": "Sed ocurreret iracundia expetendis ex. Te prima voluptaria sea, ius reque sonet ei.",
      "articleText": "<p>Eu vel ancillae explicari, sit novum fabellas splendide at, senserit referrentur at eos. Magna aliquam interesset eu mea, delectus senserit usu eu. Debet qualisque eam et, atomorum periculis rationibus no mea. Amet laudem consulatu in sea, in qui enim platonem deterruisset.</p>",
      "author": "Toni Bishop",
      "shared" : true,
      "url": "https://via.placeholder.com/1440x960.png",
      "urlToImage": "https://via.placeholder.com/1440x960.png",
      "icon": "https://via.placeholder.com/32x32.png",
      "keywords": "growth",
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "lastUpdated": new Date(),
      "lastUpdatedBy": "Toni Bishop",
      "deleted": false,
      "draft": false,
      "views": Math.floor(Math.random() * 1000),
      "lastViewed": new Date(),
      "bookmarked": false,
      "bookmarkedCount": Math.floor(Math.random() * 1000),
      "favored": false,
      "favoredCount": Math.floor(Math.random() * 1000),
      "broadcasted": true,
      "broadcastedCount": Math.floor(Math.random() * 1000),
      "userName": "Toni Bishop",
      "userImage" : "https://via.placeholder.com/64x64.png",
      "timeStamp": new Date(),
    },
    {
      "id": Math.floor(Math.random() * 1000).toString(),
      "title": "June in Africa: Taxi wars, smarter cities and increased investments",
      "name": "June in Africa: Taxi wars, smarter cities and increased investments",
      "link": "/",
      "publishedAt": new Date(),
      "badge": null,
      "blog_id": Math.floor(Math.random() * 1000).toString(),
      "description": "Posse feugiat apeirian te vim. Ne mazim labitur forensibus eam. Audire utroque ea est, cu mei affert suavitate",
      "articleText": "<p>Magna inermis sea ei, id eam veniam aeterno. Possim scripta ne eam, mundi impetus indoctum has ne, cetero efficiendi sed ad.</p>",
      "author": "Danny Dawson",
      "url": "https://via.placeholder.com/1440x960.png",
      "urlToImage": "https://via.placeholder.com/1440x960.png",
      "icon": "https://via.placeholder.com/32x32.png",
      "keywords": "growth",
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "lastUpdated": new Date(),
      "lastUpdatedBy": "Danny Dawson",
      "deleted": false,
      "draft": false,
      "views": Math.floor(Math.random() * 1000),
      "lastViewed": new Date(),
      "bookmarked": false,
      "bookmarkedCount": Math.floor(Math.random() * 1000),
      "favored": false,
      "favoredCount": Math.floor(Math.random() * 1000),
      "broadcasted": true,
      "broadcastedCount": Math.floor(Math.random() * 1000),
      "userName": "Danny Dawson",
      "userImage" : "https://via.placeholder.com/64x64.png",
      "shared" : true,
      "timeStamp": new Date(),
    },
    {
      "id": Math.floor(Math.random() * 1000).toString(),
      "title": "10 Horrible Habits You're Doing Right Now That Are Draining Your Energy",
      "name": "10 Horrible Habits You're Doing Right Now That Are Draining Your Energy",
      "link": "/",
      "publishedAt": new Date(),
      "badge": null,
      "blog_id": Math.floor(Math.random() * 1000).toString(),
      "userImage" : "https://via.placeholder.com/64x64.png",
      "shared" : true,
      "description": "Usu ut malis doctus discere, ei erat verterem vituperatoribus mei, eos dictas accusam ad.",
      "articleText": "<p>Alii illum conclusionemque cu duo, per cu oratio malorum vituperatoribus. Sed in ignota tibique, cu eam inimicus voluptatibus. Vix an veniam deserunt. Mel nihil scripta prodesset cu. No falli habemus vim.</p>",
      "author": "Melissa McDonald",
      "url": "https://via.placeholder.com/1440x960.png",
      "urlToImage": "https://via.placeholder.com/1440x960.png",
      "icon": "https://via.placeholder.com/32x32.png",
      "keywords": "growth",
      "user_id": Math.floor(Math.random() * 1000).toString(),
      "lastUpdated": new Date(),
      "lastUpdatedBy": "Melissa McDonald",
      "deleted": false,
      "draft": false,
      "views": Math.floor(Math.random() * 1000),
      "lastViewed": new Date(),
      "bookmarked": false,
      "bookmarkedCount": Math.floor(Math.random() * 1000),
      "favored": false,
      "favoredCount": Math.floor(Math.random() * 1000),
      "broadcasted": true,
      "broadcastedCount": Math.floor(Math.random() * 1000),
      "userName": "Melissa McDonald",
      "timeStamp": new Date(),
    },
  ];

  @Output() pageEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onPageEvent(article: any) : void {
    this.pageEvent.emit({article});
  }

}
