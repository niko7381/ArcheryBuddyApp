import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingLogDetailsPageRoutingModule } from './training-log-details-routing.module';

import { TrainingLogDetailsPage } from './training-log-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingLogDetailsPageRoutingModule
  ],
  declarations: [TrainingLogDetailsPage]
})
export class TrainingLogDetailsPageModule {}
