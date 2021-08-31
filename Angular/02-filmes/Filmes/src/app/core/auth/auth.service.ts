import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/shared/models/UserLogin';
import { StorageLocalService } from 'src/app/shared/services/storage-local.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAuth: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private storage: StorageLocalService,
  ) {}

  login(usuario: UserLogin) {

    if (usuario.email === '' && usuario.password === '') {
      usuario.checked ? this.userStorage(usuario) : null;
      this.usuarioAuth = true;
      this.router.navigate(['']);
      this.mostrarMenuEmitter.emit(true);
    }
    else {
      this.usuarioAuth = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }
  userAuth() {
    return this.usuarioAuth;
  }
  userStorage(user: any) {
    this.storage.config(true, 'UserAccount');
    this.storage.sendUniqueData(user);
  }

}
