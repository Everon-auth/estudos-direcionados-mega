"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SigninModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var signin_component_1 = require("./container/signin.component");
var sig_in_form_component_1 = require("./sign-in-form/sig-in-form.component");
var terms_component_1 = require("./terms/terms.component");
var shared_module_1 = require("src/app/shared/shared.module");
var SigninModule = /** @class */ (function () {
    function SigninModule() {
    }
    SigninModule = __decorate([
        core_1.NgModule({
            declarations: [
                signin_component_1.SigninComponent,
                sig_in_form_component_1.SigInFormComponent,
                terms_component_1.TermsComponent
            ],
            imports: [
                common_1.CommonModule,
                shared_module_1.SharedModule
            ]
        })
    ], SigninModule);
    return SigninModule;
}());
exports.SigninModule = SigninModule;
