import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { GuardsComponent } from './guards/guards.component';
import { AlunosComponent } from './alunos/alunos.component';

import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
//import { routing } from './app.routing';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos/cursos.service';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
   // CursosComponent,
    LoginComponent,
    HomeComponent,
   // PaginaNaoEncontradaComponent,
    GuardsComponent,
    AlunosComponent,
    //CursoDetalheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    //routing,
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
