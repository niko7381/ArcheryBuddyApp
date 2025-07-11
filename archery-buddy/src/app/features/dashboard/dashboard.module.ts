import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DashboardPage } from './pages/dashboard/dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [DashboardPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule {}
