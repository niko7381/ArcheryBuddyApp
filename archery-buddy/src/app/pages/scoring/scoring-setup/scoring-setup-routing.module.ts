import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScoringSetupPage } from './scoring-setup.page';

const routes: Routes = [
  {
    path: '',
    component: ScoringSetupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScoringSetupPageRoutingModule {}
