import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { RouterErrorComponent } from './features/router-error/router-error.component';
import { AuthguardService } from './shared/guards/auth.guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthguardService],
    canActivateChild: [AuthguardService],

  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthguardService],
    canActivateChild: [AuthguardService],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthguardService],
    canActivateChild: [AuthguardService],
  },
  {
    path: '**',
    component: RouterErrorComponent,
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
