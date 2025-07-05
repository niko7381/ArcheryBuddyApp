import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private authService: AuthService,
    private menu: MenuController
  ) { }

  ionViewWillEnter() {
    this.menu.enable(false); // Disable menu on login
  }

  ionViewWillLeave() {
    this.menu.enable(true);
  }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      displayName: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  async register() {
    const loading = await this.loadingController.create();
    await loading.present();

    await this.authService.register(this.credentials.value);
    await loading.dismiss();
  }
}
