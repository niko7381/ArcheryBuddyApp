import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhysicalTrainingFrontpagePage } from './physical-training-frontpage.page';

const routes: Routes = [
  {
    path: '',
    component: PhysicalTrainingFrontpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhysicalTrainingFrontpagePageRoutingModule {}
