import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
//import { CursosService } from './cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
//import { ReceberCursoComponent } from './receber-curso/receber-curso.component';
import { LogService } from './shared/log.service'

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CriarCursoComponent,
   // ReceberCursoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    LogService
  //  CursosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
