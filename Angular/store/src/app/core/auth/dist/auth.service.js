"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.getUserDetails = function () {
        return localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
    };
    AuthService.prototype.setDataInLocalStorage = function (variableName, data) {
        localStorage.setItem(variableName, data);
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.clearStorage = function () {
        localStorage.clear();
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
/* import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { StorageLocalService } from 'src/app/shared/services/storage-local.service';
import { APIService } from '../API/api.service';
import { CoreModule } from '../core.module';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: CoreModule
})
export class AuthService {

  private auth: boolean = false;
  autenticado = new EventEmitter<Boolean>();

  constructor(
    private router: Router,
    private service: APIService,
    private storage: StorageLocalService,
    private _snackBar: MatSnackBar
  ) { }

  login(usuario: User) {
    let data: any;
    this.service.tryLogin().subscribe(
      success => data = success,
      error => this.openSnackBar(`Houve um erro interno, tente novamente mais tarde! Erro: ${error.status}`, "OK!"),
      () => this.verifyData(data, usuario)
    )
  }
  isAuth() {
    return this.auth;
  }
  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 4000 });
  }
  private verifyData(data: any, usuario: User) {
    data.forEach((user: any) => {
      this.auth = user.email == usuario.user && user.senha == usuario.password ? true : false;
      console.log(this.auth)
      if (this.auth) {
        this.setInfo(user)
        this.router.navigate([''])
        return this.openSnackBar('Logado com Sucesso!', 'OK!')
      };
    });
  }
  setInfo(data: any) {
    this.storage.config(true, 'userAccount')
    this.storage.sendUniqueData(this.storage.stringing(data))
  }
}
 */ 
