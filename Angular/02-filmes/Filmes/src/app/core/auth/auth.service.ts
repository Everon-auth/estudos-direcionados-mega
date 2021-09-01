import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { UserLogin } from 'src/app/shared/models/UserLogin';
import { UserLogs } from 'src/app/shared/models/UserLogs';
import { CrudService } from 'src/app/shared/services/crud/crud.service';
import { StorageLocalService } from 'src/app/shared/services/storage/storage-local.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAuth: boolean = false;

  public user!: UserLogs;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private storage: StorageLocalService,
    private http: CrudService,
  ) {
  }

  private login(usuario: UserLogin, user: UserLogs) {
    if (usuario.email === user.email && usuario.password === user.senha) {
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

  getuserANDlogin(usuario: UserLogin) {
    this.http.returnList(`http://localhost:8000/Users`).pipe(
      map(
        (user: any) => user.filter((profile: UserLogin) => profile.email == usuario.email)
      ),
      take(1))
      .subscribe(
        user => this.user = user[0],
        _ => { throw new Error(`Não foi possível se conectar ao banco de dados.`) },
        () => this.login(usuario, this.user)
      )
  }
}
