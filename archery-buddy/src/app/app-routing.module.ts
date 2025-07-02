/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToFrontpage = () => redirectLoggedInTo(['frontpage']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'frontpage',
    loadChildren: () => import('./pages/frontpage/frontpage.module').then( m => m.FrontpagePageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/Auth/login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToFrontpage),
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/Auth/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'scoring-setup',
    loadChildren: () => import('./pages/scoring/scoring-setup/scoring-setup.module').then( m => m.ScoringSetupPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'scoring',
    loadChildren: () => import('./pages/scoring/scoring/scoring.module').then( m => m.ScoringPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'training-log-frontpage',
    loadChildren: () => import('./pages/trainingLog/training-log-frontpage/training-log-frontpage.module').then( m => m.TrainingLogFrontpagePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'training-log-create',
    loadChildren: () => import('./pages/trainingLog/training-log-create/training-log-create.module').then( m => m.TrainingLogCreatePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'training-log-details/:id',
    loadChildren: () => import('./pages/trainingLog/training-log-details/training-log-details.module').then( m => m.TrainingLogDetailsPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'physical-training-frontpage',
    loadChildren: () => import('./pages/physicalTraining/physical-training-frontpage/physical-training-frontpage.module').then( m => m.PhysicalTrainingFrontpagePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'physical-training-create',
    loadChildren: () => import('./pages/physicalTraining/physical-training-create/physical-training-create.module').then( m => m.PhysicalTrainingCreatePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'physical-training-details/:id',
    loadChildren: () => import('./pages/physicalTraining/physical-training-details/physical-training-details.module').then( m => m.PhysicalTrainingDetailsPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'statistics-frontpage',
    loadChildren: () => import('./pages/statistics/statistics-frontpage/statistics-frontpage.module').then( m => m.StatisticsFrontpagePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'statistics-details/:id',
    loadChildren: () => import('./pages/statistics/statistics-details/statistics-details.module').then( m => m.StatisticsDetailsPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'specsheet-frontpage',
    loadChildren: () => import('./pages/specsheet/specsheet-frontpage/specsheet-frontpage.module').then( m => m.SpecsheetFrontpagePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'specsheet-create',
    loadChildren: () => import('./pages/specsheet/specsheet-create/specsheet-create.module').then( m => m.SpecsheetCreatePageModule)
  },
  {
    path: 'specsheet-selecttype',
    loadChildren: () => import('./pages/specsheet/specsheet-selecttype/specsheet-selecttype.module').then( m => m.SpecsheetSelecttypePageModule)
  },
  {
    path: 'specsheet-details',
    loadChildren: () => import('./pages/specsheet/specsheet-details/specsheet-details.module').then( m => m.SpecsheetDetailsPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/Auth/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
