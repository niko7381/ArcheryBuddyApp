import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collection } from 'src/app/helpers/collections';
import { TrainingService } from 'src/app/services/training/training.service';

@Component({
  selector: 'app-training-log-frontpage',
  templateUrl: './training-log-frontpage.page.html',
  styleUrls: ['./training-log-frontpage.page.scss'],
})
export class TrainingLogFrontpagePage implements OnInit {

  // contains all trainings
  public trainings: [];

  constructor(
    private router: Router,
    private trainingService: TrainingService
  ) { }

  // runs getall function before the user access the page
  ngOnInit() {
    this.getall();
  }

  // gets all trainings and assigns it to the trainings property
  public async getall() {
    this.trainings = await this.trainingService.getAllTrainings(Collection.trainingLog);
  }

  // navigates to the details page when the user clicks details button with id for selectet training
  public details(row: string) {
    this.router.navigateByUrl(`/training-log-details/${row}`, { replaceUrl: true });
  }

  // deletes the selectet training
  public delete(row: string) {
    this.trainingService.deleteDocument(row, Collection.trainingLog);
  }

}
