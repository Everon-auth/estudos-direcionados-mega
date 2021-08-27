import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { SigninModule } from './signin/signin.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    SigninModule
  ],
  exports:[
    LoginModule,
    SigninModule,
    SharedModule,
  ]
})
export class AuthComponentModule { }
