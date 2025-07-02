import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecsheetDetailsPageRoutingModule } from './specsheet-details-routing.module';

import { SpecsheetDetailsPage } from './specsheet-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecsheetDetailsPageRoutingModule
  ],
  declarations: [SpecsheetDetailsPage]
})
export class SpecsheetDetailsPageModule {}
