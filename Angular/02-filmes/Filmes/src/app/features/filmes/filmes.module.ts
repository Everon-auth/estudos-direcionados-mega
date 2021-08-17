import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmesRoutingModule } from './filmes-routing.module';
import { FilmesComponent } from './filmes.component';
import { OptionPannelComponent } from '../../shared/option-pannel/option-pannel.component';
import { SharedModule } from '../../shared/shared.module';
import { AddFormFilmsComponent } from './add-form-films/add-form-films.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilmsListComponent } from './films-list/films-list.component';


@NgModule({
  declarations: [
    FilmesComponent,
    OptionPannelComponent,
    AddFormFilmsComponent,
    FilmsListComponent,

  ],
  imports: [
    CommonModule,
    FilmesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class FilmesModule { }
