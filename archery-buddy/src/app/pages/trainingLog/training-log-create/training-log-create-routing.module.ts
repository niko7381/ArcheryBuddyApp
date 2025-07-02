import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingLogCreatePage } from './training-log-create.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingLogCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingLogCreatePageRoutingModule {}
