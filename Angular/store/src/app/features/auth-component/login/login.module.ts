import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './container/login.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    LoginComponent,
    LogInFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LoginModule { }
