import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmesRoutingModule } from './filmes-routing.module';
import { FilmesComponent } from './filmes.component';
import { OptionPannelComponent } from '../shared/option-pannel/option-pannel.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FilmesComponent,
    OptionPannelComponent,

  ],
  imports: [
    CommonModule,
    FilmesRoutingModule,
    SharedModule
  ]
})
export class FilmesModule { }
