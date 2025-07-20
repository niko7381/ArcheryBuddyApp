import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from './services/Auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isAuthenticated = false;
  displayName: string;

  public appPages = [
    { title: 'Dashboard', url: '/dashboard/dashboard' },
    { title: 'Scoring', url: '/training/scoring' },
    { title: 'Training Log', url: '/training/traininglog-frontpage' },
    { title: 'Physical Training', url: '/training/physical-training-frontpage' },
    { title: 'Statistics', url: '/statistics/statistics' },
    { title: 'Specifications Sheets', url: '/specs/spec-frontpage' },
    { title: 'Settings', url: '/settings/settings' }
  ];

  constructor(
    private authService: AuthService
  ) {}

  logout() {
    this.authService.logout();
  }
}
