import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhysicalTrainingFrontpagePageRoutingModule } from './physical-training-frontpage-routing.module';

import { PhysicalTrainingFrontpagePage } from './physical-training-frontpage.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhysicalTrainingFrontpagePageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [PhysicalTrainingFrontpagePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PhysicalTrainingFrontpagePageModule {}
