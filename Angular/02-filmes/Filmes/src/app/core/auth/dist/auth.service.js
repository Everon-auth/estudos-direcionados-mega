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
    function AuthService(router, storage) {
        this.router = router;
        this.storage = storage;
        this.usuarioAuth = false;
        this.mostrarMenuEmitter = new core_1.EventEmitter();
        var data = this.storage.config(true, 'UserAccount');
        data = this.storage.callJSON();
        if (data) {
            this.login(JSON.parse(this.storage.callJSON()));
        }
    }
    AuthService.prototype.login = function (usuario) {
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
    };
    AuthService.prototype.userAuth = function () {
        return this.usuarioAuth;
    };
    AuthService.prototype.userStorage = function (user) {
        this.storage.config(true, 'UserAccount');
        this.storage.sendUniqueData(user);
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
