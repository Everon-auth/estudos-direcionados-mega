import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth-component/login/container/login.component';
import { SigninComponent } from './auth-component/signin/container/signin.component';
import { TermsComponent } from './auth-component/signin/terms/terms.component';
import { NavbarComponent } from './main-components/navbar/navbar.component';

const routes: Routes = [
  {path: '', component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
