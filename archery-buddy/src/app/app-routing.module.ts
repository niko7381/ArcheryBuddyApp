/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToFrontpage = () => redirectLoggedInTo(['frontpage']);

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: async () => {
      const m = await import('./features/auth/auth.module');
      return m.AuthModule;
    }
  },
  {
    path: 'dashboard',
    loadChildren: async () => {
      const m = await import('./features/dashboard/dashboard.module');
      return m.DashboardModule;
    }
  },
  {
    path: 'settings',
    loadChildren: async () => {
      const m = await import('./features/settings/settings.module');
      return m.SettingsModule;
    }
  },
  {
    path: 'specs',
    loadChildren: async () => {
      const m = await import('./features/specs/spec.module');
      return m.SpecPageModule;
    }
  },
  {
    path: 'statistics',
    loadChildren: async () => {
      const m = await import('./features/statistics/statistics.module');
      return m.StatisticsModule;
    }
  },
  {
    path: 'training',
    loadChildren: async () => {
      const m = await import('./features/training/training.module');
      return m.TrainingModule;
    }
  },
  // { path: '', redirectTo: 'auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
