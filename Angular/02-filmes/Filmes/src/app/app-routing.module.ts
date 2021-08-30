import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { AuthGuardService } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'films',
    loadChildren: () => import('./features/filmes/filmes.module').then(m => m.FilmesModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'community',
    loadChildren: () => import('./features/community/community.module').then(m => m.CommunityModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'series',
    loadChildren: () => import('./features/series/series.module').then(m => m.SeriesModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule),
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren: () => import('./features/log-in-form/log-in-form.module').then(m => m.LogInFormModule),
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
