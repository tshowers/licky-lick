import { Component, OnInit, OnDestroy, ViewChild, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Upload, Topic, Dependent, Dropdown, Section } from 'lick-data';
import { UploadService, DropdownService, TypeFindService, TOPICS } from 'licky-services';
import { LickAppPageComponent, LickAppBehavior } from 'lick-app-page';
import { DataMediationService } from '../../shared/services/data-mediation.service';

@Component({
  selector: 'app-topic-edit',
  templateUrl: './topic-edit.component.html',
  styleUrls: ['./topic-edit.component.css']
})
export class TopicEditComponent extends LickAppPageComponent implements OnInit, OnDestroy, LickAppBehavior {

  topic: Topic = new Topic();

  prefixes: Dropdown[];

  status: Dropdown[];

  genders: Dropdown[];

  relationships: Dropdown[];

  dependent: Dependent = new Dependent();

  @ViewChild('dataForm') private frm: NgForm;

  @ViewChild('t') ngbTabSet;

  selectedFiles: FileList;

  currentUpload: Upload;

  searchArgument;

  section: Section = new Section();


  constructor(public dm: DataMediationService, protected renderer2: Renderer2, public router: Router, public typeFindService: TypeFindService, private _uploadService: UploadService, private _dropdownService: DropdownService, private _route: ActivatedRoute) {
    super(router, renderer2);
  }

  ngOnInit() {
    super.ngOnInit();
    this._route.data
      .subscribe((data: { topic: Topic }) => {
        console.log("Topic=", data.topic)
        if (data.topic) {
          this.topic = data.topic;
          this.setBreadCrumb();
          if (this.topic.name)
            this.searchArgument = this.topic.name;
        }
      });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  setBreadCrumb(): void {

    this.crumbs = [
      { name: "dashboard", link: "/application/topics/dashboard", active: false },
      { name: "topics", link: "/application/topics", active: false },
      { name: (this.topic.id ? (this.topic.name) : "edit"), link: "/application/topics/new", active: true },
    ]
  }

  onBreadCrumb(link): void {
    this.router.navigate([link]);
  }

  onSubmit(): void {
    this.modelCheck();
    (this.topic.id ? this.onUpdate() : this.saveNewTopic());
  }

  private redirect(redirectPath): void {
    if (!this.currentUpload) {
      console.log("No upload", this.currentUpload, redirectPath)
      this.router.navigate([redirectPath]);
    }
    else {
      console.log("Uploading", this.currentUpload, redirectPath)
      let uploadCheck = setInterval(() => {
        if (this.currentUpload.progress >= 100) {
          clearInterval(uploadCheck);
          this.router.navigate([redirectPath]);
        }
      }, 1000)
    }
  }

  private uploadSingle() {
    if (this.selectedFiles) {
      let file = this.selectedFiles.item(0)
      if (file) {
        this.currentUpload = new Upload(file);
        this.currentUpload.topic_id = this.topic.id;
        this._uploadService.pushFileToStorage(this.currentUpload, TOPICS, '/application/topics/' + this.topic.id, this.topic, this.dm.db);
      }
    }
  }

  private detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  onUpdate(): void {
    this.dm.db.updateData(TOPICS, this.topic.id, this.topic);
    const redirectPath = '/application/topics/' + this.topic.id;
    this.uploadSingle();
    this.redirect(redirectPath);
  }

  onDelete(): void {
    this.topic.deleted = true;
    this.onUpdate();
    this.onBrandNew();
  }

  saveNewTopic(): void {
    this.dm.db.writeData(TOPICS, this.topic).subscribe((key) => {
      this.topic.id = key;
      const redirectPath = '/application/topics/' + this.topic.id;
      this.uploadSingle();
      this.redirect(redirectPath);
    });
  }

  onBrandNew(): void {
    this.topic = new Topic();
  }


  private initializeDropdowns(): void {
    this.genders = this._dropdownService.getGenders();
    this.prefixes = this._dropdownService.getPrefixes();
    this.status = this._dropdownService.getStatus();
    this.relationships = this._dropdownService.getRelationships();
  }

  newSection(): void {
    this.topic.sections.push(this.section);
    this.section = new Section();
  }

  editSection(at: number): void {
    this.section = this.topic.sections[at];
    this.removeSection(at);
  }

  removeSection(at: number): void {
    this.topic.sections.splice(at, 1);
  }

  removeTopicFile(at: number): void {
    this.topic.upload.splice(at, 1);
  }

  uploadMulti() {
    let files = this.selectedFiles
    if (files) {
      for (let i = 0; i < files.length; i++) {
        this.currentUpload = new Upload(files[i]);
        this.currentUpload.topic_id = this.topic.id;
        this._uploadService.pushFileToStorage(this.currentUpload, TOPICS, '/application/topics/' + this.topic.id, this.topic, this.dm.db);
      }
    }
  }


  modelCheck() {
    if (this.section.name)
      this.newSection();
  }

  onSearch(value): void {
    this.router.navigate(['application', 'topics'], { queryParams: { searchArgument: value } })
  }

  get diagnostic() {
    return JSON.stringify(this.topic, null, 2)
  }

}
