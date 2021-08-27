import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './features/main-components/container/main.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'login',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
