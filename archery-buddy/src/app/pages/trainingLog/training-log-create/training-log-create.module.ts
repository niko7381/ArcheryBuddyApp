import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingLogCreatePageRoutingModule } from './training-log-create-routing.module';

import { TrainingLogCreatePage } from './training-log-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingLogCreatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TrainingLogCreatePage]
})
export class TrainingLogCreatePageModule {}
