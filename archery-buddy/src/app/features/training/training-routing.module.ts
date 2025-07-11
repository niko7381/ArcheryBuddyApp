import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhysicalTrainingCreatePage } from './pages/physical-training-create/physical-training-create.page';
import { PhysicalTrainingDetailsPage } from './pages/physical-training-details/physical-training-details.page';
import { PhysicalTrainingFrontpagePage } from './pages/physical-training-frontpage/physical-training-frontpage.page';
import { ScoringPage } from './pages/scoring/scoring.page';
import { ScoringSetupPage } from './pages/scoring-setup/scoring-setup.page';
import { TrainingLogCreatePage } from './pages/training-log-create/training-log-create.page';
import { TrainingLogDetailsPage } from './pages/training-log-details/training-log-details.page';
import { TrainingLogFrontpagePage } from './pages/training-log-frontpage/training-log-frontpage.page';

const routes: Routes = [
    { path: 'physical-training-frontpage', component: PhysicalTrainingFrontpagePage },
    { path: 'physical-training-create', component: PhysicalTrainingCreatePage },
    { path: 'physical-training-details', component: PhysicalTrainingDetailsPage },
    { path: 'scoring', component: ScoringPage },
    { path: 'scoring-setup', component: ScoringSetupPage },
    { path: 'traininglog-frontpage', component: TrainingLogFrontpagePage },
    { path: 'traininglog-create', component: TrainingLogCreatePage },
    { path: 'traininglog-details', component: TrainingLogDetailsPage },
    { path: 'physical-training-details/:id', component: PhysicalTrainingDetailsPage },
    { path: 'training-log-details/:id', component: TrainingLogDetailsPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class TrainingRoutingModule {}
