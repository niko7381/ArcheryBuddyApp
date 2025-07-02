import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import firebase from 'firebase/compat';
import { Collection } from 'src/app/helpers/collections';
import IScoring from 'src/app/types/scoring.model';

@Injectable({
  providedIn: 'root'
})
export class ScoringService {
  // props
  arrows: string;
  targetType: string;
  distance: string;
  notes: string;

  constructor(
    private router: Router,
    private db: AngularFirestore,
    private alertController: AlertController,
    private auth: AngularFireAuth,
  ) { }

  // gets values from setup and assignes them to the props here
  public async getValuesfromSetup(obj) {
    this.arrows = obj.rounds;
    this.targetType = obj.targetype;
    this.distance = obj.distance;
    this.notes = obj.notes;
  }

  // create scoring in the DB
  public async createScoring(data: IScoring) {
    const scoring = await this.db.collection(Collection.users).doc((await this.auth.currentUser).uid)
    .collection(Collection.scoring).add(data).then(async () => {
      const alert = await this.alertController.create({
        header: 'your score was saved',
        buttons: ['OK', 'Dismiss'],
      });
      await alert.present();
      this.router.navigateByUrl('/scoring-setup', {replaceUrl: true});
    }).catch((err) => {
      console.log(err);
    });
  }

  // returns all scorings
  public getAllScorings(collection: string) {
    return new Promise<any>(async (resolve) => {
      this.db.collection(Collection.users).doc((await this.auth.currentUser).uid)
      .collection(collection).valueChanges({ idField: 'propertyId'}).subscribe(data => resolve(data));
    });
  }

  // Gets specific scoring with ID
  public getSpecificScoring(id: string, collection: string) {
    return new Promise<any>(async (resolve) => {
      this.db.collection(Collection.users).doc((await this.auth.currentUser).uid)
      .collection(collection).doc(id).get().subscribe(response => {
        resolve(response.data());
      });
    });
  }

  // Delete select document
  public async deleteDocument(id: string, collection: string) {
    this.deleteAlert('Do you want to the Training with id: ' + id, 'This cannot be redone', id, collection);
  }

  // Delete alert
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

  // shows Alert
  async showAlert(header: string, message: any) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK', 'Dismiss'],
    });
    await alert.present();
  }

  // update Scoring
  public async updateScoring(id: string, obj: Partial<firebase.firestore.DocumentData>, collection: string) {
    const trainings = await this.db.collection(Collection.users).doc((await this.auth.currentUser).uid)
    .collection(collection).doc(id).update(obj).catch((err) => {
      this.showAlert('Error', err);
    });
    return trainings;
  }

  // update Alert
  async updateAlert(header: string, message: string) {
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
