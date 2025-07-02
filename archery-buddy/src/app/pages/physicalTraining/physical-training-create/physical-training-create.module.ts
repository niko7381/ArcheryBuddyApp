import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhysicalTrainingCreatePageRoutingModule } from './physical-training-create-routing.module';

import { PhysicalTrainingCreatePage } from './physical-training-create.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhysicalTrainingCreatePageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [PhysicalTrainingCreatePage]
})
export class PhysicalTrainingCreatePageModule {}
