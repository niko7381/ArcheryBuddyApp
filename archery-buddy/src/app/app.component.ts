import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './services/Auth/auth.service';
import { TrainingService } from './services/training/training.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  isAuthenticated = false;

  displayName: string;

  public appPages = [
    { title: 'Home', url: '/frontpage' },
    { title: 'Begin-Scoring', url: '/scoring-setup' },
    { title: 'Training-Log', url: '/training-log-frontpage' },
    { title: 'Physical-Training', url: '/physical-training-frontpage' },
    { title: 'Statistics', url: '/statistics-frontpage' },
    { title: 'Spec-Sheet', url: '/specsheet-frontpage' },
    { title: 'Settings', url: '/settings' },
  ];
  constructor() {}
}
