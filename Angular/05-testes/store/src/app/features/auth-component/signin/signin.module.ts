import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './container/signin.component';
import { SigInFormComponent } from './sign-in-form/sig-in-form.component';
import { TermsComponent } from './terms/terms.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    SigninComponent,
    SigInFormComponent,
    TermsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SigninModule { }
