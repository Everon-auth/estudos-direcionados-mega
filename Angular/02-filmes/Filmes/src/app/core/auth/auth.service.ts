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
  ) {
    let data = this.storage.config(true, 'UserAccount')
    data == undefined ? this.login(JSON.parse(this.storage.callJSON())) : null
  }

  login(usuario: UserLogin) {

    if (usuario.email === '' && usuario.password === '') {
      usuario.checked ? this.userStorage(usuario) : null;
      this.usuarioAuth = true
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['']);
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
    this.storage.sendUniqueData(user)
  }

}
