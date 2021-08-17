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
    path: 'error',
    loadChildren: () => import('./shared/error/error.module').then(m => m.ErrorModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'', pathMatch:'full',redirectTo:'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
