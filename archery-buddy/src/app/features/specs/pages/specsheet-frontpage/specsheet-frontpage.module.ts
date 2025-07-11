import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecsheetFrontpagePageRoutingModule } from './specsheet-frontpage-routing.module';

import { SpecsheetFrontpagePage } from './specsheet-frontpage.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecsheetFrontpagePageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [SpecsheetFrontpagePage]
})
export class SpecsheetFrontpagePageModule {}
