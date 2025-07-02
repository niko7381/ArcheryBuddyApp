import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Collection } from 'src/app/helpers/collections';
import { ScoringService } from 'src/app/services/scoring/scoring.service';

@Component({
  selector: 'app-statistics-details',
  templateUrl: './statistics-details.page.html',
  styleUrls: ['./statistics-details.page.scss'],
})
export class StatisticsDetailsPage implements OnInit {

  // contains scoringId
  private scoringId: string;

  // contains values for 2 way binding
  private averagePrArrow: number;
  private averagePrRound: number;
  private arrows: string;
  private targetType: string;
  private distance: string;
  private notes: string;
  private nines: number;
  private tens: number;
  private total: number;

  constructor(
    private scorService: ScoringService,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController
  ) { }

  // gets id from url and runs getDetails
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.scoringId = id;
    this.getDetails();
  }

  // gets details values and assignes it to propertys
  async getDetails() {
    const value = await this.scorService.getSpecificScoring(this.scoringId, Collection.scoring);

    this.arrows = value.rounds;
    this.total = value.total;
    this.targetType = value.targetFace;
    this.distance = value.distance;
    this.notes = value.notes;
    this.averagePrArrow = value.averagePrArrow;
    this.averagePrRound = value.averagePrRound;
    this.nines = value.nines;
    this.tens = value.tens;
  }

  // Updates scoring by creating data object and sends it to the service
  async updateScoring() {
    const obj = {
      averagePrArrow: this.averagePrArrow,
      averagePrRound: this.averagePrRound,
      distance: this.distance,
      nines: this.nines,
      notes: this.notes,
      rounds: this.arrows,
      targetFace: this.targetType,
      tens: this.tens,
      total: this.total,
    };

    const askUserBeforeUpdate = await this.alertController.create({
      header: 'Confirm',
      message: 'updating the document cannot be redone!',
      buttons: [
          {
            text: 'Ok',
            id: 'Ok-button',
            handler: () => {
              this.scorService.updateScoring(this.scoringId, obj, Collection.scoring).then(() => {
                this.scorService.updateAlert('Document with the following id have been updated:', this.scoringId);
                this.router.navigate(['/statistics-frontpage']);
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
}
