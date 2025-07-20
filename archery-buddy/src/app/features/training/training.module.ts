import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhysicalTrainingCreatePage } from './pages/physical-training-create/physical-training-create.page';
import { PhysicalTrainingDetailsPage } from './pages/physical-training-details/physical-training-details.page';
import { PhysicalTrainingFrontpagePage } from './pages/physical-training-frontpage/physical-training-frontpage.page';
import { ScoringPage } from './pages/scoring/scoring.page';
import { ScoringSetupPage } from './pages/scoring-setup/scoring-setup.page';
import { TrainingLogCreatePage } from './pages/training-log-create/training-log-create.page';
import { TrainingLogDetailsPage } from './pages/training-log-details/training-log-details.page';
import { TrainingLogFrontpagePage } from './pages/training-log-frontpage/training-log-frontpage.page';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TrainingRoutingModule } from './training-routing.module';

@NgModule({
  declarations: [
    PhysicalTrainingCreatePage,
    PhysicalTrainingDetailsPage,
    PhysicalTrainingFrontpagePage,
    ScoringPage,
    ScoringSetupPage,
    TrainingLogCreatePage,
    TrainingLogDetailsPage,
    TrainingLogFrontpagePage
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingRoutingModule,
    NgxDatatableModule
  ]
})
export class TrainingModule {}
