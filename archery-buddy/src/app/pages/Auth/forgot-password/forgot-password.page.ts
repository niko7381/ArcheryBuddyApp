import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  // formgroup prop
  public email: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  // instantiates formgroup
  ngOnInit() {
    this.email = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  // runs when button is pressed and sends user an reset password email
  resetPassword() {
    const email = this.email.value.email;

    this.afAuth.sendPasswordResetEmail(email).then(() => {
      alert('success');
      this.router.navigateByUrl('/login', {replaceUrl: true});
    }
    ).catch(err => {
      alert(err);
    });
  };
}
