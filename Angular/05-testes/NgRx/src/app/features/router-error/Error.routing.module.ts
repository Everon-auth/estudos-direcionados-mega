import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterErrorComponent } from './router-error.component';


const routes: Routes = [
  {
    path: '',
    component: RouterErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
