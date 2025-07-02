import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScoringSetupPageRoutingModule } from './scoring-setup-routing.module';

import { ScoringSetupPage } from './scoring-setup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScoringSetupPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ScoringSetupPage]
})
export class ScoringSetupPageModule {}
