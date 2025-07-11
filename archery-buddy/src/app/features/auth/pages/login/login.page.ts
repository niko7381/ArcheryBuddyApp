import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  public credentials: FormGroup;


  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private authService: AuthService,
    private router: Router,
    private menu: MenuController
  ) { }

  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }

  ionViewWillEnter() {
    this.menu.enable(false); // Disable menu on login
  }

  ionViewWillLeave() {
    this.menu.enable(true);
  }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async login() {
    // runs the login function in authService and create loading before
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.login(this.credentials.value);
    await loading.dismiss();

    // If user returns something navigate to frontpage else say auth failed
    if (user) {
      this.authService.setuserId(user);
      this.router.navigateByUrl('/dashboard/dashboard', { replaceUrl: true });
    } else {
      this.authService.showAlert('Login failed', 'Please try again!');
    }
  }

  // navigates to signup page
  onSignup() {
    this.router.navigateByUrl('/auth/signup', { replaceUrl: true });
  }

  // when users presses Reset password
  onResetPassword() {
    this.router.navigateByUrl('/auth/forgot-password', { replaceUrl: true });
  }
}
