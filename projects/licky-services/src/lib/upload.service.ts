import { Injectable } from '@angular/core';
import { FirebaseDataService, GROUPS, CAROUSELS, PROPERTIES, TOPICS, PARALLAXS, FEATURETTES, SERVICE_BOXES, PRODUCTS, CONTACTS, DOCUMENTS, ARTICLES, CATALOGS, PRODUCT_BUNDLES, HELP, OFFERS, STORES, PROJECTS } from './firebase-data.service';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { Contact, Property, Topic, Project, Store, Product, Group, Offer, Catalog, ProductBundle, Help, Upload, Docuttach, Carousel, ServiceBox, Featurette, Parallax, Article } from 'lick-data';
import { IdGeneratorService } from './id-generator.service';
import { SortHelperService } from './sort-helper.service';


@Injectable()
export class UploadService {

  private uploadTask: firebase.storage.UploadTask;
  uploads: Observable<Upload[]>;

  constructor(
    private _sortHelperService: SortHelperService, public db: FirebaseDataService) { }

  pushUpload(imageUpload: boolean, upload: Upload) {
    let storageRef = firebase.storage().ref();
    let id = IdGeneratorService.generateUUID();
    let extention = upload.file.name.substring(upload.file.name.indexOf("."));
    let fn = id + extention;
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
        this.saveData(imageUpload, upload);
      }
    );
  }

  pushGroup(upload: Upload, group: Group) {
    let storageRef = firebase.storage().ref();
    let id = IdGeneratorService.generateUUID();
    let extention = upload.file.name.substring(upload.file.name.indexOf("."));
    let fn = id + extention;
    let storeLocation = DOCUMENTS + "/" + fn;

    this.uploadTask = storageRef.child(storeLocation).put(upload.file);

    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: Snapshot) => {
        // upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        console.error(error)
      },
      () => {
        // upload success
        upload.draft = group.draft;
        upload.deleted = group.deleted;
        upload.ref = "/app/settings/teams/" + group.id
        this.saveFilePointer(true, upload, fn);
        group.url = upload.url;
        // this.db.updateData(GROUPS + this._authService.getDataPrefix(), group.id, group)
      }
    );
  }

  pushTopic(upload: Upload, topic: Topic) {
    let storageRef = firebase.storage().ref();
    let id = IdGeneratorService.generateUUID();
    let extention = upload.file.name.substring(upload.file.name.indexOf("."));
    let fn = id + extention;
    let storeLocation = DOCUMENTS + "/" + fn;

    this.uploadTask = storageRef.child(storeLocation).put(upload.file);

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
        upload.draft = topic.draft;
        upload.deleted = topic.deleted;
        upload.ref = "/app/topics/" + topic.id
        this.saveFilePointer(true, upload, fn);
        topic.upload.push(upload) ;
        // this.db.updateData(TOPICS + this._authService.getDataPrefix(), topic.id, topic)
      }
    );
  }

  pushProperty(upload: Upload, property: Property) {
    let storageRef = firebase.storage().ref();
    let id = IdGeneratorService.generateUUID();
    let extention = upload.file.name.substring(upload.file.name.indexOf("."));
    let fn = id + extention;
    let storeLocation = DOCUMENTS + "/" + fn;

    this.uploadTask = storageRef.child(storeLocation).put(upload.file);

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
        upload.ref = "/app/properties/" + property.id
        upload.draft = property.draft;
        upload.deleted = property.deleted;
        this.saveFilePointer(true, upload, fn);
        property.upload.push(upload) ;
        // this.db.updateData(PROPERTIES + this._authService.getDataPrefix(), property.id, property)
      }
    );
  }

  pushCarousel(upload: Upload, carousel: Carousel) {
    let storageRef = firebase.storage().ref();
    let id = IdGeneratorService.generateUUID();
    let extention = upload.file.name.substring(upload.file.name.indexOf("."));
    let fn = id + extention;
    let storeLocation = DOCUMENTS + '/' + fn;
    this.uploadTask = storageRef.child(storeLocation).put(upload.file);

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
        upload.ref = "/blog/" + carousel.blog_id + "/carousels/" + carousel.id;
        upload.draft = carousel.draft;
        upload.deleted = carousel.deleted;
        this.saveFilePointer(true, upload, fn);
        carousel.url = upload.url;
        // this.db.updateData(CAROUSELS + this._authService.getDataPrefix() + '/' + carousel.blog_id, carousel.id, carousel)
      }
    );
  }

  pushContact(upload: Upload, contact: Contact) {
    let storageRef = firebase.storage().ref();
    let id = IdGeneratorService.generateUUID();
    let extention = upload.file.name.substring(upload.file.name.indexOf("."));
    let fn = id + extention;
    let storeLocation = DOCUMENTS + '/' + fn;
    this.uploadTask = storageRef.child(storeLocation).put(upload.file);

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
        upload.ref = "/app/contacts/" + contact.id;
        contact.draft = contact.draft;
        contact.deleted = contact.deleted;
        this.saveFilePointer(true, upload, fn);
        contact.url = upload.url;
        // this.db.updateData(CONTACTS + this._authService.getDataPrefix(), contact.id, contact);
      }
    );
  }


  pushArticle(upload: Upload, article: Article) {
    let storageRef = firebase.storage().ref();
    let id = IdGeneratorService.generateUUID();
    let extention = upload.file.name.substring(upload.file.name.indexOf("."));
    let fn = id + extention;
    let storeLocation = DOCUMENTS + '/' + fn;

    this.uploadTask = storageRef.child(storeLocation).put(upload.file);

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
        upload.ref = "/blog/" + article.blog_id + "/articles/" + article.id;
        upload.draft = article.draft;
        upload.deleted = article.deleted;
        this.saveFilePointer(true, upload, fn);
        article.url = upload.url;
        // this.db.updateData(ARTICLES + this._authService.getDataPrefix() + '/' + article.blog_id, article.id, article);
      }
    );
  }

  pushParallax(upload: Upload, parallax: Parallax) {
    let storageRef = firebase.storage().ref();
    let id = IdGeneratorService.generateUUID();
    let extention = upload.file.name.substring(upload.file.name.indexOf("."));
    let fn = id + extention;
    let storeLocation = DOCUMENTS + '/' + fn;
    this.uploadTask = storageRef.child(storeLocation).put(upload.file);

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
        upload.ref = "/blog/" + parallax.blog_id + "/parallaxs/" + parallax.id;
        upload.draft = parallax.draft;
        upload.deleted = parallax.deleted;
        this.saveFilePointer(true, upload, fn);
        parallax.url = upload.url;
        // this.db.updateData(PARALLAXS + this._authService.getDataPrefix() + '/' + parallax.blog_id, parallax.id, parallax);
      }
    );
  }

  pushFeaturette(upload: Upload, featurette: Featurette) {
    let storageRef = firebase.storage().ref();
    let id = IdGeneratorService.generateUUID();
    let extention = upload.file.name.substring(upload.file.name.indexOf("."));
    let fn = id + extention;
    let storeLocation = DOCUMENTS + '/' + fn;
    this.uploadTask = storageRef.child(storeLocation).put(upload.file);

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
        upload.ref = "/blog/" + featurette.blog_id + "/featurettes/" + featurette.id;
        upload.draft = featurette.draft;
        upload.deleted = featurette.deleted;
        this.saveFilePointer(true, upload, fn);
        featurette.url = upload.url;
        // this.db.updateData(FEATURETTES + this._authService.getDataPrefix() + '/' + featurette.blog_id, featurette.id, featurette);
      }
    );
  }

  pushServiceBox(upload: Upload, serviceBox: ServiceBox) {
    let storageRef = firebase.storage().ref();
    let id = IdGeneratorService.generateUUID();
    let extention = upload.file.name.substring(upload.file.name.indexOf("."));
    let fn = id + extention;
    let storeLocation = DOCUMENTS + '/' + fn;
    this.uploadTask = storageRef.child(storeLocation).put(upload.file);

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
        upload.ref = "/blog/" + serviceBox.blog_id + "/service-boxes/" + serviceBox.id;
        upload.draft = serviceBox.draft;
        upload.deleted = serviceBox.deleted;
        this.saveFilePointer(true, upload, fn);
        serviceBox.url = upload.url;
        // this.db.updateData(SERVICE_BOXES + this._authService.getDataPrefix() + '/' + serviceBox.blog_id, serviceBox.id, serviceBox);
      }
    );
  }

  pushCatalog(upload: Upload, catalog: Catalog) {
    let storageRef = firebase.storage().ref();
    let id = IdGeneratorService.generateUUID();
    let extention = upload.file.name.substring(upload.file.name.indexOf("."));
    let fn = id + extention;
    let storeLocation = DOCUMENTS + '/' + fn;
    this.uploadTask = storageRef.child(storeLocation).put(upload.file);

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
        upload.ref = "/app/stores" + catalog.store_id + "/catalogs/" + catalog.id;
        upload.draft = catalog.draft;
        upload.deleted = catalog.deleted;
        this.saveFilePointer(true, upload, fn);
        catalog.url = upload.url;
        // this.db.updateData(CATALOGS + this._authService.getDataPrefix() + '/' + catalog.store_id, catalog.id, catalog);
      }
    );
  }


  pushStore(upload: Upload, store: Store) {
    let storageRef = firebase.storage().ref();
    let id = IdGeneratorService.generateUUID();
    let extention = upload.file.name.substring(upload.file.name.indexOf("."));
    let fn = id + extention;
    let storeLocation = DOCUMENTS + '/' + fn;
    this.uploadTask = storageRef.child(storeLocation).put(upload.file);

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
        upload.ref = "/app/stores/" + store.id;
        upload.draft = store.draft;
        upload.deleted = store.deleted;
        this.saveFilePointer(true, upload, fn);
        store.url = upload.url;
        // this.db.updateData(STORES + this._authService.getDataPrefix(), store.id, store);
      }
    );
  }

  pushProduct(upload: Upload, product: Product) {
    let storageRef = firebase.storage().ref();
    let id = IdGeneratorService.generateUUID();
    let extention = upload.file.name.substring(upload.file.name.indexOf("."));
    let fn = id + extention;
    let storeLocation = DOCUMENTS + '/' +  fn;
    this.uploadTask = storageRef.child(storeLocation).put(upload.file);

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
        upload.ref = "/app/stores/" + product.store_id + "/catalogs/" + product.catalog_id + "/products/" + product.id;
        upload.draft = product.draft;
        upload.deleted = product.deleted;
        this.saveFilePointer(true, upload, fn);
        product.url = upload.url;
        // this.db.updateData(PRODUCTS + this._authService.getDataPrefix() + '/' + product.store_id + '/' + product.catalog_id, product.id, product);
      }
    );
  }

  pushOffer(upload: Upload, offer: Offer) {
    let storageRef = firebase.storage().ref();
    let id = IdGeneratorService.generateUUID();
    let extention = upload.file.name.substring(upload.file.name.indexOf("."));
    let fn = id + extention;
    let storeLocation = DOCUMENTS + '/' + fn;
    this.uploadTask = storageRef.child(storeLocation).put(upload.file);

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
        upload.ref = "/app/stores/" + offer.store_id + "/catalogs/" + offer.catalog_id + "/offers/" + offer.id;
        upload.draft = offer.draft;
        upload.deleted = offer.deleted;
        this.saveFilePointer(true, upload, fn);
        offer.url = upload.url;
        // this.db.updateData(OFFERS + this._authService.getDataPrefix() + '/' + offer.store_id + '/' + offer.catalog_id, offer.id, offer);
      }
    );
  }

  pushHelp(upload: Upload, help: Help) {
    let storageRef = firebase.storage().ref();
    let id = IdGeneratorService.generateUUID();
    let extention = upload.file.name.substring(upload.file.name.indexOf("."));
    let fn = id + extention;
    let storeLocation = DOCUMENTS + '/' +  fn;
    let isImage = this.isImage(fn);
    this.uploadTask = storageRef.child(storeLocation).put(upload.file);

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
        upload.ref = "/app/help/" + help.id;
        upload.draft = help.draft;
        upload.deleted = help.deleted;
        this.saveFilePointer(isImage, upload, fn);
        help.url = upload.url;
        // this.db.updateData(HELP + this._authService.getDataPrefix(), help.id, help);
      }
    );
  }

  pushProductBundle(upload: Upload, productBundle: ProductBundle) {
    let storageRef = firebase.storage().ref();
    let id = IdGeneratorService.generateUUID();
    let extention = upload.file.name.substring(upload.file.name.indexOf("."));
    let fn = id + extention;
    let storeLocation = DOCUMENTS + '/'  + fn;
    this.uploadTask = storageRef.child(storeLocation).put(upload.file);

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
        upload.ref = "/app/stores/" + productBundle.store_id + "/catalogs/" + productBundle.catalog_id + "/product-bundles/" + productBundle.id;
        upload.draft = productBundle.draft;
        upload.deleted = productBundle.deleted;
        this.saveFilePointer(true, upload, fn);
        productBundle.url = upload.url;
        // this.db.updateData(PRODUCT_BUNDLES + this._authService.getDataPrefix() + '/' + productBundle.store_id + '/' + productBundle.catalog_id, productBundle.id, productBundle);
      }
    );
  }

  pushProject(upload: Upload, project: Project) {
    let storageRef = firebase.storage().ref();
    let id = IdGeneratorService.generateUUID();
    let extention = upload.file.name.substring(upload.file.name.indexOf("."));
    let fn = id + extention;
    let storeLocation = DOCUMENTS + "/" + fn;
    this.uploadTask = storageRef.child(storeLocation).put(upload.file);

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
        upload.ref = "/app/projects/" + project.id;
        upload.draft = project.draft;
        upload.deleted = project.deleted;
        this.saveFilePointer(true, upload, fn);
        project.url = upload.url;
        // this.db.updateData(PROJECTS + this._authService.getDataPrefix(), project.id, project);
      }
    );
  }

  deleteDocuttach(docuttach: Docuttach) {
    // this.deleteFile(docuttach.id)
    //   .then(
    //   () => {
    //     this.deleteFileStored(docuttach.name);
    //   }
    //   )
    //   .catch(
    //   error => console.error(error)
    //   )
  }

  deleteUpload(upload: Upload) {
    // this.deleteFile(upload.id)
    //   .then(
    //   () => {
    //     this.deleteFileStored(upload.name);
    //   }
    //   )
    //   .catch(
    //   error => console.error(error)
    //   )
  }

  private deleteFile(key: string) {
    console.log("Deleting  " + key)
    // return this._db.list(DOCUMENTS + this._authService.getDataPrefix() + '/').remove(key);
  }

  private deleteFileStored(name: string) {
    console.log("Deleting file " + name)
    let storageRef = firebase.storage().ref();
    // storageRef.child(DOCUMENTS + this._authService.getDataPrefix() + '/' + name).delete();
  }

  private saveFileData(upload: Upload) {
    // this.db.saveData(DOCUMENTS + this._authService.getDataPrefix(), upload);
  }

  // update the meta data
  private updataMeta(data: any): void {
    // const userID = this._authService.getUserID();
    // const displayName = this._authService.getDisplayName();
    // data.lastUpdated = new Date().getTime();
    // data.draft = false;
    // data.deleted = false;
    // if (userID) {
    //   data.user_id = userID;
    //   data.lastUpdatedBy = userID;
    // }
    // data.creatorName = displayName;
  }

  private saveData(imageUpload: boolean, upload: Upload): void {
    upload.url = this.uploadTask.snapshot.downloadURL
    upload.name = upload.file.name
    upload.originalName = upload.file.name;
    upload.id = IdGeneratorService.generateUUID();
    // upload.thumbnail = upload.url.replace(upload.name, 'thumb_' + upload.name)
    this.updataMeta(upload);
    this.saveFileData(upload);
  }

  private saveFilePointer(imageUpload: boolean, upload: Upload, imageName: string): void {
    upload.url = this.uploadTask.snapshot.downloadURL;
    upload.byteSize = this.uploadTask.snapshot.totalBytes;
    upload.originalName = upload.file.name;
    upload.name = imageName;
    // upload.thumbnail = upload.url.replace(upload.name, 'thumb_' + upload.name)
    upload.id = IdGeneratorService.generateUUID();
    this.updataMeta(upload);
    this.saveFileData(upload);
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
