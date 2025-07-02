import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatisticsFrontpagePageRoutingModule } from './statistics-frontpage-routing.module';

import { StatisticsFrontpagePage } from './statistics-frontpage.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatisticsFrontpagePageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [StatisticsFrontpagePage]
})
export class StatisticsFrontpagePageModule {}
