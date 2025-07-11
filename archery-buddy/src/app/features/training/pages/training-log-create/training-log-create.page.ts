import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { Collection } from 'src/app/helpers/collections';
import { TrainingService } from 'src/app/services/training/training.service';

@Component({
  selector: 'app-training-log-create',
  templateUrl: './training-log-create.page.html',
  styleUrls: ['./training-log-create.page.scss'],
})
export class TrainingLogCreatePage implements OnInit {
  @ViewChild(IonDatetime) datetime: IonDatetime;
  trainingLog: FormGroup;
  seletedMode = 'date';
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd');
  formattedString = '';

  constructor(
    private fb: FormBuilder,
    private trainingService: TrainingService,
    private router: Router
  ) {
    this.setToday();
  }

  // instantiates the formgroup
  ngOnInit() {
    this.trainingLog = this.fb.group({
      arrowsShot: ['', Validators.required],
      weather: ['', Validators.required],
      changes: ['', Validators.required],
      focusPoints: ['', Validators.required],
      howDidItGo: ['', Validators.required]
    });
  }

  // sets todays date in the date input
  setToday() {
    this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd')), 'MMM d, yyyy');
  }

  // gets values from formgroup and then creates a data object and sends that to the service
  async createTraining() {
    const data = {
      date: this.formattedString,
      arrowsShot: this.trainingLog.value.arrowsShot,
      weather: this.trainingLog.value.weather,
      changes: this.trainingLog.value.changes,
      focusPoints: this.trainingLog.value.focusPoints,
      howDidItGo: this.trainingLog.value.howDidItGo,
    };

    const trainings = await this.trainingService.createTraining(data, Collection.trainingLog);

    if (trainings) {
      await this.trainingService.createAlert(
        'Your data was succesfully stored',
        'Navigation back to physical trainings frontpage'
      );
      this.router.navigateByUrl('/training-log-frontpage', { replaceUrl: true });
    } else {
      this.trainingService.showAlert(
        'Failed to store the data',
        'Something went wrong...'
      );
    }
  };

  // runs when the data is changed
  dateChanged(value) {
    this.dateValue = value;
    this.formattedString = format(parseISO(value), 'MMM, dd, yyyy');
    this.showPicker = false;
  }

  // modal close
  close() {
    this.datetime.cancel(true);
  }

  // select in modal
  select() {
    this.datetime.confirm(true);
  }
}
