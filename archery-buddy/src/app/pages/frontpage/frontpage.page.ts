import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Collection } from 'src/app/helpers/collections';
import { ScoringService } from 'src/app/services/scoring/scoring.service';
import { TrainingService } from 'src/app/services/training/training.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.page.html',
  styleUrls: ['./frontpage.page.scss'],
})
export class FrontpagePage implements OnInit {
  public allTrainings: [];
  public goal = '';
  public columns: any;
  public rows: any;
  public scorings: [];
  public data: any;
  reorderable = true;
  loadingIndicator = true;

  constructor(
    private trainingService: TrainingService,
    private scoringService: ScoringService,
    private menu: MenuController
  ) { }

  openMenu() {
    this.menu.open();
  }

  closeMenu() {
    this.menu.close();
  }

  togleMenu() {
    this.menu.toggle();
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  // runs before user access the page
  ngOnInit() {
    this.getall();
    this.getallTrainings();
    this.getGoal();
  }

  // Gets all scorings
  public async getall() {
    this.scorings = await this.scoringService.getAllScorings(Collection.scoring);
  }

  // Gets all physicaltrainings
  public async getallTrainings() {
    this.allTrainings = await this.trainingService.getAllTrainings(Collection.physicalTraining);
  }

  // gets users goal
  public async getGoal() {
    await this.trainingService.getGoal().then((res) => {
      this.goal = res.goal;
    });
  }
}
