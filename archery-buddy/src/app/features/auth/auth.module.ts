// Modules imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthRoutingModule } from './auth-routing.module';

// Pages imports
import { LoginPage } from './pages/login/login.page';
import { SignupPage } from './pages/signup/signup.page';
import { ForgotPasswordPage } from './pages/forgot-password/forgot-password.page';

@NgModule({
    declarations: [
        LoginPage,
        SignupPage,
        ForgotPasswordPage
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        AuthRoutingModule
    ]
})

export class AuthModule {}
