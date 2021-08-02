import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import 'materialize-css';
import { CursosService } from './cursos/cursos.service';
import { AppRoutingModule } from './app.routing.module';
import { AlunosModule } from './alunos/alunos.module';
import { AuthService } from './login/auth.service';
import { AuthGuardService } from './guards/auth.guard.service';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PaginaNaoEncontradaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AlunosModule,
  ],
  providers: [
    CursosService,
    AuthService,
    AuthGuardService,
    CursosGuard,
    AlunosGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
