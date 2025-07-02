import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { Collection } from 'src/app/helpers/collections';
import { TrainingService } from 'src/app/services/training/training.service';

@Component({
  selector: 'app-training-log-details',
  templateUrl: './training-log-details.page.html',
  styleUrls: ['./training-log-details.page.scss'],
})
export class TrainingLogDetailsPage implements OnInit {
  @ViewChild(IonDatetime) datetime: IonDatetime;
  seletedMode = 'date';
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd');
  formattedString = '';

  // contains trainingID
  private trainingsId: string;

  // contains values
  private arrowsShot: number;
  private weather: string;
  private focusPoints: string;
  private changes: string;
  private howDidItGo: string;
  private date: string;

  constructor(
    private trainingService: TrainingService,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController
  ) { }

  // gets id from url and runs getDetails()
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.trainingsId = id;
    this.getDetails();
  }

  // create data object from formgroup values and then sends it to the server
  async updateTraining() {
    const obj = {
      arrowsShot: this.arrowsShot,
      weather: this.weather,
      date: this.date,
      focusPoints: this.focusPoints,
      changes: this.changes,
      howDidItGo: this.howDidItGo,
    };

    const askUserBeforeUpdate = await this.alertController.create({
      header: 'Confirm',
      message: 'updating the document cannot be redone!',
      buttons: [
          {
            text: 'Ok',
            id: 'Ok-button',
            handler: () => {
              this.trainingService.updateTraining(this.trainingsId, obj, Collection.trainingLog).then(() => {
                this.trainingService.updateAlert('Document with the following id have been updated:', this.trainingsId);
                this.router.navigate(['/training-log-frontpage']);
              });
            }
          }, {
            text: 'Cancel',
            id: 'Cancel-button',
          }
      ]
    });
    await askUserBeforeUpdate.present();
  }

  // gets all the values from the selected training and then saves assign it to the propertys
  async getDetails() {
    const value = await this.trainingService.getSpecificTraining(this.trainingsId, Collection.trainingLog);

    console.log(value);

    this.date = value.date;
    this.arrowsShot = value.arrowsShot;
    this.weather = value.weather;
    this.focusPoints = value.focusPoints;
    this.changes = value.changes;
    this.howDidItGo = value.howDidItGo;
  }

  // sets today date in the data field
  setToday() {
    this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd')), 'MMM d, yyyy');
  }

  // puts the new selecte date in the datefield
  dateChanged(value) {
    this.dateValue = value;
    this.date = format(parseISO(value), 'MMM, dd, yyyy');
    this.showPicker = false;
  }
  // close modal
  close() {
    this.datetime.cancel(true);
  }

  // select modal
  select() {
    this.datetime.confirm(true);
  }
}
