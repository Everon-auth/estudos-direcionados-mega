import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogInFormComponent } from './log-in-form.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    LogInFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LogInFormModule { }
