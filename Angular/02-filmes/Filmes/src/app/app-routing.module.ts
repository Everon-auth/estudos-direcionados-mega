import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'films',
    loadChildren: () => import('./features/filmes/filmes.module').then(m => m.FilmesModule)
  },
  {
    path: 'community',
    loadChildren: () => import('./features/community/community.module').then(m => m.CommunityModule)
  },
  {
    path: 'series',
    loadChildren: () => import('./features/series/series.module').then(m => m.SeriesModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'login',
    loadChildren: () => import('./features/log-in-form/log-in-form.module').then(m => m.LogInFormModule)
  },
  {
    path:'', pathMatch:'full',redirectTo:'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
