import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { Collection } from 'src/app/helpers/collections';
import { TrainingService } from 'src/app/services/training/training.service';

@Component({
  selector: 'app-physical-training-details',
  templateUrl: './physical-training-details.page.html',
  styleUrls: ['./physical-training-details.page.scss'],
})
export class PhysicalTrainingDetailsPage implements OnInit {
  @ViewChild(IonDatetime) datetime: IonDatetime;
  seletedMode = 'date';
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd');
  formattedString = '';

  // contains specific trainingId
  private trainingsId: string;

  // Contains values
  private calBurned: number;
  private category: string;
  private date: string;
  private howDidItGo: string;
  private sets: string;
  private time: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private trainingService: TrainingService,
    private alertController: AlertController
  ) {}

  // gets the id from the url and sets it to trainingsID prop and then runs getDetails()
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.trainingsId = id;
    this.getDetails();
  }

  // Get details for specific training
  async getDetails() {
    const value = await this.trainingService.getSpecificTraining(this.trainingsId, Collection.physicalTraining);

    this.calBurned = value.calBurned;
    this.category = value.category;
    this.date = value.date;
    this.howDidItGo = value.howDidItGo;
    this.sets = value.sets;
    this.time = value.time;
  }

  // gets new values and updates the training
  async updateTraining() {
    const obj = {
      calBurned: this.calBurned,
      category: this.category,
      date: this.date,
      howDidItGo: this.howDidItGo,
      sets: this.sets,
      time: this.time
    };

    // create alert thats ask user if there are sure they wants to update the record
    const askUserBeforeUpdate = await this.alertController.create({
      header: 'Confirm',
      message: 'updating the document cannot be redone!',
      buttons: [
          {
            text: 'Ok',
            id: 'Ok-button',
            handler: () => {
              this.trainingService.updateTraining(this.trainingsId, obj, Collection.physicalTraining).then(() => {
                this.trainingService.updateAlert('Your document have been updated:', this.trainingsId);
                this.router.navigate(['/physical-training-frontpage']);
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

  // runs when date value changes
  dateChanged(value: string) {
    this.dateValue = value;
    this.date = format(parseISO(value), 'MMM, dd, yyyy');
    this.showPicker = false;
  }

  // close modal
  close() {
    this.datetime.cancel(true);
  }

  // select new value in modal
  select() {
    this.datetime.confirm(true);
  }
}
