import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // formgroup prop
  public credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private authService: AuthService,
    private router: Router
  ) { }

  // Gets email from HTML
  get email() {
    return this.credentials.get('email');
  }

  // Gets password from HTML
  get password() {
    return this.credentials.get('password');
  }

  // runs formgroup initialization before the page is accessed by the user
  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Login function runs when ever the login button is pushed
  async login() {
    // runs the login function in authService and create loading before
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.login(this.credentials.value);
    await loading.dismiss();

    // If user returns something navigate to frontpage else say auth failed
    if (user) {
      this.router.navigateByUrl('/frontpage', { replaceUrl: true });
    } else {
      this.authService.showAlert('Login failed', 'Please try again!');
    }
  }

  // navigates to signup page
  onSignup() {
    this.router.navigateByUrl('/signup', { replaceUrl: true });
  }

  // when users presses Reset password
  onResetPassword() {
    this.router.navigateByUrl('/forgot-password', { replaceUrl: true });
  }
}
