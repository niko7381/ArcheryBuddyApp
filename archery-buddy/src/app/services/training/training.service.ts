/* eslint-disable @typescript-eslint/no-shadow */
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Collection } from '../../helpers/collections';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  alldata: any;

  constructor(
    private router: Router,
    private db: AngularFirestore,
    private alertController: AlertController,
    private auth: AngularFireAuth,
  ) {}

  public async createTraining(data, collection) {
    const trainings = await this.db.collection(Collection.users).doc((await this.auth.currentUser).uid)
    .collection(collection).add(data).catch(err => {
      this.alertController.create(err);
    });
    return trainings;
  }

  public async updateTraining(id, obj, collection) {
    const trainings = await this.db.collection(Collection.users).doc((await this.auth.currentUser).uid)
    .collection(collection).doc(id).update(obj).catch((err) => {
      this.showAlert('Error', err);
    });
    return trainings;
  }

  public getAllTrainings(collection) {
    return new Promise<any>(async (resolve) => {
      this.db.collection(Collection.users).doc((await this.auth.currentUser).uid)
      .collection(collection).valueChanges({ idField: 'propertyId'}).subscribe(data => resolve(data));
    });
  }

  public getGoal() {
    return new Promise<any>(async (resolve) => {
      this.db.collection(Collection.users).doc((await this.auth.currentUser).uid).get().subscribe((res) => {
        resolve(res.data());
        console.log(res.data());
      });
    });
  }

  public getSpecificTraining(id, collection) {
    return new Promise<any>(async (resolve) => {
      this.db.collection(Collection.users).doc((await this.auth.currentUser).uid)
      .collection(collection).doc(id).get().subscribe(response => {
        resolve(response.data());
      });
    });
  }

  public async getId() {
    this.db.collection(Collection.users).doc((await this.auth.currentUser).uid)
    .collection(Collection.physicalTraining).get().subscribe((snapshot) => {
      snapshot.forEach(doc => {
        console.log(doc);
      });
    });
  }

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

  async deleteAlert(header: string, message: string, id: string, collection: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [{
        text: 'OK',
        handler: async data => {
          await this.db.collection(Collection.users).doc((await this.auth.currentUser).uid).collection(collection).doc(id).delete();
          location.reload();
        }
      }, {
        text: 'Dismiss',
      }
    ],
    });
    await alert.present();
  }

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
