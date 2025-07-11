import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { TrainingService } from 'src/app/services/training/training.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Collection } from 'src/app/helpers/collections';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public email: string;
  public password: string;
  public goal = '';

  constructor(
    private db: AngularFirestore,
    private auth: AngularFireAuth,
    private authService: AuthService,
    private trainingsService: TrainingService
  ) { }

  // gets goal before the user access the page
  ngOnInit() {
    this.getGoal();
  }

  // logs user out
  public logout() {
    this.authService.logout();
    location.reload();
  }

  // updates user email
  public updateEmail() {
    this.authService.updateEmail(this.email);
  }

  // gets goal assosiated with the user
  public async getGoal() {
    await this.trainingsService.getGoal().then((res) => {
      this.goal = res.goal;
    });
  }

  //updates the goal
  public async updateGoal() {
    const data = {
      goal: this.goal
    };

    this.db.collection(Collection.users).doc((await this.auth.currentUser).uid).set(data);

    alert('Your goal was updated!');
  }
}
