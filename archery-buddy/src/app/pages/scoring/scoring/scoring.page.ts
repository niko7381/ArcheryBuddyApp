import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ScoringService } from 'src/app/services/scoring/scoring.service';

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.page.html',
  styleUrls: ['./scoring.page.scss'],
})
export class ScoringPage implements OnInit {
  // propertys
  arrows: string;
  targetType: string;
  distance: string;
  notes: string;

  indoor: boolean;
  outdoor: boolean;

  pointsOutdoor: FormGroup;
  pointsindoor: FormGroup;

  // propertys
  total: number;
  roundCount = 1;
  tens = 0;
  nines = 0;

  constructor(
    private fb: FormBuilder,
    private scorService: ScoringService,
    private router: Router
  ) {}

  // gets values from service
  ngOnInit() {
    this.arrows = this.scorService.arrows;
    this.targetType = this.scorService.targetType;
    this.distance = this.scorService.distance;
    this.notes = this.scorService.notes;

    // decides what round to create
    if (this.arrows === '30') {
      this.indoor = true;
      this.outdoor = false;
    } else if (this.arrows === '60') {
      this.outdoor = true;
      this.indoor = false;
    }

    // instantiates the formgroups
    this.pointsOutdoor = this.fb.group({
      arrow1: [[Validators.required]],
      arrow2: [[Validators.required]],
      arrow3: [[Validators.required]],
      arrow4: [[Validators.required]],
      arrow5: [[Validators.required]],
      arrow6: [[Validators.required]],
    });

    this.pointsindoor = this.fb.group({
      arrow1: [[Validators.required]],
      arrow2: [[Validators.required]],
      arrow3: [[Validators.required]]
    });
  }

  // create the scoring when fineshed and add values to the overview while shooting
  public scoring() {
    if (this.outdoor) {
      const arrow1 = this.pointsOutdoor.value.arrow1;
      const arrow2 = this.pointsOutdoor.value.arrow2;
      const arrow3 = this.pointsOutdoor.value.arrow3;
      const arrow4 = this.pointsOutdoor.value.arrow4;
      const arrow5 = this.pointsOutdoor.value.arrow5;
      const arrow6 = this.pointsOutdoor.value.arrow6;

      const total = arrow1 + arrow2 + arrow3 + arrow4 + arrow5 + arrow6;

      if (!this.total) {
        this.total = total;
      } else {
        this.total = this.total + total;
      }

      if (arrow1 === 10) {
        this.tens = this.tens + 1;
      } else if (arrow1 === 9) {
        this.nines = this.nines + 1;
      }

      if (arrow2 === 10) {
        this.tens = this.tens + 1;
      } else  if (arrow2 === 9) {
        this.nines = this.nines + 1;
      }

      if (arrow3 === 10) {
        this.tens = this.tens + 1;
      } else if (arrow3 === 9) {
        this.nines = this.nines + 1;
      }

      if (arrow4 === 10) {
        this.tens = this.tens + 1;
      } else if (arrow4 === 9) {
        this.nines = this.nines + 1;
      }

      if (arrow5 === 10) {
        this.tens = this.tens + 1;
      } else if (arrow5 === 9) {
        this.nines = this.nines + 1;
      }

      if (arrow6 === 10) {
        this.tens = this.tens + 1;
      } else if (arrow6 === 9) {
        this.nines = this.nines + 1;
      }

      this.roundCount = this.roundCount + 1;

      if (this.roundCount === 7) {
        const data = {
          total: this.total,
          rounds: this.roundCount - 1,
          tens: this.tens,
          nines: this.nines,
          targetFace: this.targetType,
          distance: this.distance,
          averagePrArrow: this.total / 36,
          averagePrRound: this.total / 6,
          notes: this.notes
        };
        this.scorService.createScoring(data);
        this.router.navigateByUrl('/scoring-setup');
      }
      this.pointsOutdoor.reset();
    }

    if (this.indoor) {
      const arrow1 = this.pointsindoor.value.arrow1;
      const arrow2 = this.pointsindoor.value.arrow2;
      const arrow3 = this.pointsindoor.value.arrow3;

      const total = arrow1 + arrow2 + arrow3;

      if (!this.total) {
        this.total = total;
      } else {
        this.total = this.total + total;
      }

      if (arrow1 === 10) {
        this.tens = this.tens + 1;
      } else if (arrow1 === 9) {
        this.nines = this.nines + 1;
      }

      if (arrow2 === 10) {
        this.tens = this.tens + 1;
      } else  if (arrow2 === 9) {
        this.nines = this.nines + 1;
      }

      if (arrow3 === 10) {
        this.tens = this.tens + 1;
      } else if (arrow3 === 9) {
        this.nines = this.nines + 1;
      }

      this.roundCount = this.roundCount + 1;

      if (this.roundCount === 11) {
        const data = {
          total: this.total,
          rounds: this.roundCount - 1,
          tens: this.tens,
          nines: this.nines,
          targetFace: this.targetType,
          distance: this.distance,
          averagePrArrow: this.total / 30,
          averagePrRound: this.total / 10,
          notes: this.notes
        };
        this.scorService.createScoring(data);
        this.router.navigateByUrl('/scoring-setup');
      }
      this.pointsindoor.reset(); // resets fields
    }
  }
}
