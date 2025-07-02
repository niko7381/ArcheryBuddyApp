import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatisticsFrontpagePage } from './statistics-frontpage.page';

const routes: Routes = [
  {
    path: '',
    component: StatisticsFrontpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatisticsFrontpagePageRoutingModule {}
