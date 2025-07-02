import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingLogDetailsPage } from './training-log-details.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingLogDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingLogDetailsPageRoutingModule {}
