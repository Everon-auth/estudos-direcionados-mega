import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from '../shared/modal/modal.component';
import { AddFormFilmsComponent } from './add-form-films/add-form-films.component';
import { FilmesComponent } from './filmes.component';

const routes: Routes = [
  { path:'', component: FilmesComponent },
  { path:'exclude/:id', component:ModalComponent},
  { path:'exclude/:id/false', component:FilmesComponent},
  { path:'edit/:id', component:FilmesComponent},
  { path:'view/:id', component:FilmesComponent},
  { path:'add', component:AddFormFilmsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmesRoutingModule { }
