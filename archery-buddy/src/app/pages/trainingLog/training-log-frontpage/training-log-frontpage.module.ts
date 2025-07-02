import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingLogFrontpagePageRoutingModule } from './training-log-frontpage-routing.module';

import { TrainingLogFrontpagePage } from './training-log-frontpage.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingLogFrontpagePageRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule
  ],
  declarations: [TrainingLogFrontpagePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrainingLogFrontpagePageModule {}
