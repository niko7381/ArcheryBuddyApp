import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatisticsFrontpagePage } from './pages/statistics-frontpage/statistics-frontpage.page';
import { StatisticsDetailsPage } from './pages/statistics-details/statistics-details.page';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { StatisticsRoutingModule } from './statistics-routing.module';

@NgModule({
  declarations: [
    StatisticsFrontpagePage,
    StatisticsDetailsPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatisticsRoutingModule,
    NgxDatatableModule
  ]
})
export class StatisticsModule {}
