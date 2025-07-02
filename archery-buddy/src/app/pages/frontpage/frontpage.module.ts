import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrontpagePageRoutingModule } from './frontpage-routing.module';

import { FrontpagePage } from './frontpage.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrontpagePageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [FrontpagePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrontpagePageModule {}
