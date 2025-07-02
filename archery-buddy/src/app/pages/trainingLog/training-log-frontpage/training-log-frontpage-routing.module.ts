import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingLogFrontpagePage } from './training-log-frontpage.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingLogFrontpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingLogFrontpagePageRoutingModule {}
