import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { SharedModule } from '../shared/shared.module';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosService } from './cursos.service';
import { CursoResolverGuard } from './guards/curso-resolver.guard';

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    CursosListaComponent,
    CursosFormComponent
  ],
  providers:[
    CursosService,
    CursoResolverGuard
  ]
})
export class CursosModule { }
