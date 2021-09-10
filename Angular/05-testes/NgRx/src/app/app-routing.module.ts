import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './shared/guards/auth.guard.service';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    canActivate: [AuthguardService],
    canActivateChild: [AuthguardService],
    // canLoad: [AuthguardService],
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule),

  },
  {
    path: '**',
    loadChildren: () => import('./features/router-error/Error.module').then(m => m.ErrorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
