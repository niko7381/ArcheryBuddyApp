import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhysicalTrainingDetailsPage } from './physical-training-details.page';

const routes: Routes = [
  {
    path: '',
    component: PhysicalTrainingDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhysicalTrainingDetailsPageRoutingModule {}
