import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { Usuario } from './usuario';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerlogin(usuario:Usuario){
    if(usuario.nome ==='usuario@email.com' && usuario.senha === '123456'){
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    }
    else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    };
  };

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado
  }
}
