"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SigInFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var terms_component_1 = require("../terms/terms.component");
var SigInFormComponent = /** @class */ (function () {
    function SigInFormComponent(dialog, formbuilder, api, _snackBar, route) {
        this.dialog = dialog;
        this.formbuilder = formbuilder;
        this.api = api;
        this._snackBar = _snackBar;
        this.route = route;
        this.check = false;
        this.pattern = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}';
    }
    SigInFormComponent.prototype.ngOnInit = function () {
        this.formData = this.formbuilder.group({
            nome: [null, forms_1.Validators.required],
            email: [null, [forms_1.Validators.required, forms_1.Validators.email]],
            senha: [null, [forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.pattern(this.pattern)]],
            repSenha: [null, forms_1.Validators.required]
        });
    };
    SigInFormComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(terms_component_1.TermsComponent);
        this.subcription = dialogRef.afterClosed().subscribe(function (result) {
            _this.check = result;
        });
    };
    SigInFormComponent.prototype.ngOnDestroy = function () {
        var _a;
        (_a = this.subcription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    };
    SigInFormComponent.prototype.onRegister = function () {
        console.log(this.formData.status);
        var data = this.formData.value;
        if (this.formData.status == "VALID") {
            data.senha == data.repSenha ?
                this.saveData(data)
                :
                    this.openSnackBar('Suas senhas não conferem', 'OK!');
        }
    };
    SigInFormComponent.prototype.openSnackBar = function (message, action, time) {
        if (time === void 0) { time = 5000; }
        this._snackBar.open(message, action, { duration: time });
    };
    SigInFormComponent.prototype.saveData = function (data) {
        var _this = this;
        this.api.sendUser(data).subscribe(function (success) { _this.route.navigate(['login']); }, function (error) { console.log(error); }, function () { _this.openSnackBar('Usuário criado com sucesso!', "OK!"); });
    };
    SigInFormComponent = __decorate([
        core_1.Component({
            selector: 'app-sig-in-form',
            templateUrl: './sig-in-form.component.html',
            styleUrls: ['./sig-in-form.component.scss']
        })
    ], SigInFormComponent);
    return SigInFormComponent;
}());
exports.SigInFormComponent = SigInFormComponent;
