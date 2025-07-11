/* eslint-disable @typescript-eslint/member-delimiter-style */
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { Collection } from 'src/app/helpers/collections';
import { TrainingService } from 'src/app/services/training/training.service';

@Component({
  selector: 'app-physical-training-create',
  templateUrl: './physical-training-create.page.html',
  styleUrls: ['./physical-training-create.page.scss'],
})
export class PhysicalTrainingCreatePage implements OnInit {
  @ViewChild(IonDatetime) datetime: IonDatetime;
  physicalTraining: FormGroup;
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

  // instatiates formgroup
  ngOnInit() {
    this.physicalTraining = this.fb.group({
      category: ['', Validators.required],
      time: ['', Validators.required],
      sets: ['', Validators.required],
      howDidItGo: ['', Validators.required],
      cals: ['', Validators.required]
    });
  }

  // Creates data object and runs createTraining function in trainingService
  public async createTrainingReg() {
    const data = {
      date: this.formattedString,
      category: this.physicalTraining.value.category,
      time: this.physicalTraining.value.time,
      sets: this.physicalTraining.value.sets,
      howDidItGo: this.physicalTraining.value.howDidItGo,
      calBurned: this.physicalTraining.value.cals,
    };

    const trainings = await this.trainingService.createTraining(data, Collection.physicalTraining);

    if (trainings) {
      await this.trainingService.createAlert(
        'Your data was succesfully stored',
        'Navigation back to physical trainings frontpage'
      );
      this.router.navigateByUrl('/physical-training-frontpage', { replaceUrl: true });
    } else {
      this.trainingService.showAlert(
        'Failed to store the data',
        'Something went wrong...'
      );
    }
  };

  // sets today date
  setToday() {
    this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd')), 'MMM d, yyyy');
  }

  // when date is changed
  dateChanged(value) {
    this.dateValue = value;
    this.formattedString = format(parseISO(value), 'MMM, dd, yyyy');
    this.showPicker = false;
  }

  // date modal close
  close() {
    this.datetime.cancel(true);
  }

  // date modal select
  select() {
    this.datetime.confirm(true);
  }
}
