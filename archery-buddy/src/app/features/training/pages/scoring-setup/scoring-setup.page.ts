import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import IScoringSetup from 'src/app/types/scoringSetupModel';
import { ScoringService } from 'src/app/services/scoring/scoring.service';

@Component({
  selector: 'app-scoring-setup',
  templateUrl: './scoring-setup.page.html',
  styleUrls: ['./scoring-setup.page.scss'],
})

export class ScoringSetupPage implements OnInit {
  // propertys to get values from html

  scoringSetup: FormGroup;

  // arrows: string;
  // targetType: string;
  // distance: string;
  // notes: string;

  constructor(
    private scorService: ScoringService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.scoringSetup = this.fb.group({
      rounds: ['', Validators.required],
      targetType: ['', Validators.required],
      distance: ['', Validators.required],
      notes: ['', Validators.required]
    });
  }

  // create obj and sends it to the service
  public createScoringRound() {
    const obj: IScoringSetup = {
      rounds: this.scoringSetup.value.rounds,
      targetype: this.scoringSetup.value.targetType,
      distance: this.scoringSetup.value.distance,
      notes: this.scoringSetup.value.notes
    };

    this.scorService.getValuesfromSetup(obj);
  }
}
