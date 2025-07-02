import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Collection } from 'src/app/helpers/collections';

@Injectable({
  providedIn: 'root'
})
export class SpecsheetService {

  // propertys
  public specsheetCat: string;
  alldata: any;

  constructor(
    private router: Router,
    private db: AngularFirestore,
    private alertController: AlertController,
    private auth: AngularFireAuth,
  ) {}

  public getCat(data: string) {
    this.specsheetCat = data;
  }

  public async createSpecsheet(data, collection) {
    const specsheet = await this.db.collection(Collection.users)
    .doc((await this.auth.currentUser).uid).collection(Collection.specsheet).doc().set(data)
    .catch(err => {
      this.alertController.create(err);
    });
    return specsheet;
  }

  public async updateSpecSheet(id, obj, collection) {
    const specsheet = await this.db.collection(Collection.users).doc((await this.auth.currentUser).uid)
    .collection(collection).doc(id).update(obj).then().catch((err) => {
      this.showAlert('Error', err);
    });
    return specsheet;
  }

  public getAllSpecSheets(collection) {
    return new Promise<any>(async (resolve) => {
      this.db.collection(Collection.users).doc((await this.auth.currentUser).uid)
      .collection(collection).valueChanges({ idField: 'propertyId'}).subscribe(data => resolve(data));
    });
  }

  // gets specific specsheet
  public getSpecificSpecsheet(id, collection) {
    return new Promise<any>(async (resolve) => {
      this.db.collection(Collection.users).doc((await this.auth.currentUser).uid)
      .collection(collection).doc(id).get().subscribe(response => {
        resolve(response.data());
      });
    });
  }

  // gets ids
  public async getId() {
    this.db.collection(Collection.users).doc((await this.auth.currentUser).uid)
    .collection(Collection.specsheet).get().subscribe((snapshot) => {
      snapshot.forEach(doc => {
        console.log(doc);
      });
    });
  }

  // delete scoring
  public async deleteDocument(id, collection) {
    this.deleteAlert('Do you want to the Training with id: ' + id, 'This cannot be redone', id, collection);
  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK', 'Dismiss'],
    });
    await alert.present();
  }

  // deletealert
  async deleteAlert(header, message, id, collection) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [{
        text: 'OK',
        handler: async data => {
          await this.db.collection(collection).doc(id).delete();
          await location.reload();
        }
      }, {
        text: 'Dismiss',
      }
    ],
    });
    await alert.present();
  }

  // create alert
  async createAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [{
        text: 'OK',
        handler: async data => {
          await location.reload();
        }
      }, {
        text: 'Dismiss',
      }
    ],
    });
    await alert.present();
  }

  // alert that runs before updating doc
  async updateAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [{
        text: 'OK',
        handler: async data => {
          await location.reload();
        }
      }, {
        text: 'Dismiss',
      }
    ],
    });
    await alert.present();
  }
}
