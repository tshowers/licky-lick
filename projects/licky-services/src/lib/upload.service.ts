import { Injectable } from '@angular/core';
import { FirebaseDataService, DOCUMENTS } from './firebase-data.service';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { Contact, Property, Topic, Project, Store, Product, Group, Offer, Catalog, ProductBundle, Help, Upload, Docuttach, Carousel, ServiceBox, Featurette, Parallax, Article } from 'lick-data';
import { SortHelperService } from './sort-helper.service';
import { IdGeneratorService } from './id-generator.service';


@Injectable()
export class UploadService {

  private uploadTask: firebase.storage.UploadTask;
  uploads: Observable<Upload[]>;

  constructor(private _sortHelperService: SortHelperService) { }

  pushUpload(imageUpload: boolean, upload: Upload, db: FirebaseDataService) {
    let storageRef = firebase.storage().ref();
    let extention = upload.file.name.substring(upload.file.name.lastIndexOf("."));
    let fn = IdGeneratorService.generateUUID() + extention;
    let storeLocation = DOCUMENTS + "/" + fn;
    this.uploadTask = storageRef.child(`${DOCUMENTS}/${upload.file.name}`).put(upload.file);

    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: Snapshot) => {
        // upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.error(error)
      },
      () => {
        // upload success
        this.saveData(imageUpload, upload, db);
      }
    );
  }


  pushFileToStorage(upload: Upload, dataPath: string, uploadRef: string, data: any, db: FirebaseDataService) {
    let storageRef = firebase.storage().ref();
    let extention = upload.file.name.substring(upload.file.name.lastIndexOf("."));
    let fn = IdGeneratorService.generateUUID() + extention;
    let storeLocation = DOCUMENTS + '/' + fn;
    this.uploadTask = storageRef.child(storeLocation).put(upload.file);

    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: Snapshot) => {
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.error(error)
      },
      () => {
        // upload success
        upload.draft = data.draft;
        upload.deleted = data.deleted;
        upload.ref = uploadRef;
        storageRef.child(storeLocation).getDownloadURL().then((url) => {
          upload.url = url;
          this.saveFilePointer(true, upload, fn, db);
          data.url = upload.url;
          db.updateData(dataPath, data.id, data);
        }).catch((error) => console.error(error));
      }
    );
  }

  private deleteFileStored(name: string) {
    let storageRef = firebase.storage().ref();
    storageRef.child(DOCUMENTS + '/' + name).delete();
  }

  private saveFileData(upload: Upload, db: FirebaseDataService) {
    db.writeData(DOCUMENTS, upload);
  }


  private saveData(imageUpload: boolean, upload: Upload, db: FirebaseDataService): void {
    upload.url = this.uploadTask.snapshot.downloadURL
    upload.name = upload.file.name
    upload.originalName = upload.file.name;
    this.saveFileData(upload, db);
  }

  private saveFilePointer(imageUpload: boolean, upload: Upload, imageName: string, db: FirebaseDataService): void {
    upload.byteSize = this.uploadTask.snapshot.totalBytes;
    upload.originalName = upload.file.name;
    upload.name = imageName;
    this.saveFileData(upload, db);
  }

  public isImage(url: string): boolean {
    if (!url) return false;
    if (url.indexOf(".jpg") >= 0)
      return true;
    if (url.indexOf(".jpeg") >= 0)
      return true;
    if (url.indexOf(".png") >= 0)
      return true;
    if (url.indexOf(".gif") >= 0)
      return true;
    return false;
  }

  public isPDF(url: string): boolean {
    if (!url) return false;
    if (url.indexOf(".pdf") >= 0)
      return true;
    return false;
  }
}

export interface Snapshot {
  bytesTransferred;
  totalBytes;
}
