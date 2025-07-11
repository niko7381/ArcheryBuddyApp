import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Collection } from 'src/app/helpers/collections';
import { TrainingService } from 'src/app/services/training/training.service';

@Component({
  selector: 'app-physical-training-frontpage',
  templateUrl: './physical-training-frontpage.page.html',
  styleUrls: ['./physical-training-frontpage.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PhysicalTrainingFrontpagePage implements OnInit {
  // contains all trainings
  public allTrainings: [];

  constructor(
    private trainingService: TrainingService,
    private router: Router
  ) {}

  // gets all trainings before user access the page
  ngOnInit() {
    this.getall();
  }

  // gets all trainings and put them in the alltrainings property
  public async getall() {
    this.allTrainings = await this.trainingService.getAllTrainings(Collection.physicalTraining);
  }

  // navigates to the details page and sending the id with
  public details(id: string) {
    this.router.navigateByUrl(`/physical-training-details/${id}`, { replaceUrl: true });
  }

  // delete the selectet training
  public delete(id: string) {
    this.trainingService.deleteDocument(id, Collection.physicalTraining);
  }
}
