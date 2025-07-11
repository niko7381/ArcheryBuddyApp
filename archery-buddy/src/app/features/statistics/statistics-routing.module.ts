import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatisticsFrontpagePage } from './pages/statistics-frontpage/statistics-frontpage.page';
import { StatisticsDetailsPage } from './pages/statistics-details/statistics-details.page';

const routes: Routes = [
  { path: 'statistics', component: StatisticsFrontpagePage },
  { path: 'statistics-details', component: StatisticsDetailsPage },
  { path: 'statistics-details/:id', component: StatisticsDetailsPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatisticsRoutingModule {}
