"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LogInFormComponent = void 0;
var core_1 = require("@angular/core");
var LogInFormComponent = /** @class */ (function () {
    function LogInFormComponent() {
        this.subscribe = false;
        this.state = 'hide';
    }
    LogInFormComponent.prototype.ngOnInit = function () {
        this.state = this.state === 'hide' ? 'show' : 'hide';
    };
    LogInFormComponent.prototype.ngOnDestroy = function () {
        this.state = this.state === 'hide' ? 'show' : 'hide';
    };
    LogInFormComponent = __decorate([
        core_1.Component({
            selector: 'app-log-in-form',
            templateUrl: './log-in-form.component.html',
            styleUrls: ['./log-in-form.component.scss']
        })
    ], LogInFormComponent);
    return LogInFormComponent;
}());
exports.LogInFormComponent = LogInFormComponent;
