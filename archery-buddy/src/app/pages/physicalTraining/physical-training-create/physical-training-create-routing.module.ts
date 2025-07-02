import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhysicalTrainingCreatePage } from './physical-training-create.page';

const routes: Routes = [
  {
    path: '',
    component: PhysicalTrainingCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhysicalTrainingCreatePageRoutingModule {}
