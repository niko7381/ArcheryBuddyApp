import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collection } from 'src/app/helpers/collections';
import { ScoringService } from 'src/app/services/scoring/scoring.service';

@Component({
  selector: 'app-statistics-frontpage',
  templateUrl: './statistics-frontpage.page.html',
  styleUrls: ['./statistics-frontpage.page.scss'],
})
export class StatisticsFrontpagePage implements OnInit {
  // contains all scorings
  public scorings: [];

  constructor(
    private scoringService: ScoringService,
    private router: Router,
  ) { }

  // gets all scorings
  ngOnInit() {
    this.getall();
  }

  // gets all scorings from scorings service and then assignes it to the scorings property
  public async getall() {
    this.scorings = await this.scoringService.getAllScorings(Collection.scoring);
  }

  // goes to the details page with the selecte scoring id
  public details(id: string) {
    this.router.navigateByUrl(`/statistics-details/${id}`, { replaceUrl: true });
  }

  // deletes the selectet scoring
  public delete(id: string) {
    this.scoringService.deleteDocument(id, Collection.scoring);
  }
}
