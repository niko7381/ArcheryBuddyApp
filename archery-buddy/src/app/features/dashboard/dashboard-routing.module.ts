import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { TrainingLogDetailsPage } from '../training/pages/training-log-details/training-log-details.page';
import { PhysicalTrainingDetailsPage } from '../training/pages/physical-training-details/physical-training-details.page';
import { StatisticsDetailsPage } from '../statistics/pages/statistics-details/statistics-details.page';

const routes: Routes = [
  { path: 'dashboard', component: DashboardPage },
  { path: 'training-log-details/:id', component: TrainingLogDetailsPage },
  { path: 'physical-training-details/:id', component: PhysicalTrainingDetailsPage },
  { path: 'statistics-details/:id', component: StatisticsDetailsPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
