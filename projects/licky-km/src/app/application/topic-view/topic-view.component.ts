import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Topic } from 'lick-data';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { TOPICS } from 'licky-services';
import { DataMediationService } from '../../shared/services/data-mediation.service';

@Component({
  selector: 'app-topic-view',
  templateUrl: './topic-view.component.html',
  styleUrls: ['./topic-view.component.css']
})
export class TopicViewComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  topic: Topic;

  canEdit = true;

  canDelete = true;

  searchArgument;

  isImage: boolean = false;

  constructor(public dm: DataMediationService, protected renderer2: Renderer2,
    public router: Router,
    private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this._route.data
      .subscribe((data: { topic: Topic }) => {
        this.topic = data.topic;
        this.isImage = (this.topic.url && ((this.topic.url.indexOf('.tiff') > 0) || (this.topic.url.indexOf('.jpg') > 0) || (this.topic.url.indexOf('.gif') > 0) || (this.topic.url.indexOf('.png') > 0) || (this.topic.url.indexOf('.jpeg') > 0)))
        this.setBreadCrumb();
        this.searchArgument = this.topic.name;
      });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  setBreadCrumb(): void {
    this.crumbs = [
      { name: "dashboard", link: "/application/topics/dashboard", active: false },
      { name: "topics", link: "/application/topics", active: false },
      { name: "feed", link: "/application/topics/feed", active: false },
      { name: this.topic.name, link: "/application/topics/" + this.topic.id, active: true },
      { name: "new", link: "/application/topics/new", active: false },
    ]
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onEdit() {
    this.router.navigate(['application', 'topics', this.topic.id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'top' });
  }

  onDelete() {
    this.topic.deleted = true;
    this.dm.db.updateData(TOPICS, this.topic.id, this.topic);
    this.router.navigate(['application', 'topics']);
  }

  onSearch(value): void {
    console.log("ONSEARCH", value);
    this.router.navigate(['application', 'topics'], { queryParams: { searchArgument: value } })
  }

  get diagnostic() {
    return JSON.stringify(this.topic, null, 2)
  }

}
