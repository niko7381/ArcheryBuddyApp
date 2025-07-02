import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhysicalTrainingDetailsPageRoutingModule } from './physical-training-details-routing.module';

import { PhysicalTrainingDetailsPage } from './physical-training-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PhysicalTrainingDetailsPageRoutingModule
  ],
  declarations: [PhysicalTrainingDetailsPage]
})
export class PhysicalTrainingDetailsPageModule {}
