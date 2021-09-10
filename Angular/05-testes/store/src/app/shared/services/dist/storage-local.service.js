"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StorageLocalService = void 0;
var core_1 = require("@angular/core");
var shared_module_1 = require("../shared.module");
var StorageLocalService = /** @class */ (function () {
    function StorageLocalService() {
    }
    StorageLocalService.prototype.config = function (local, setKey) {
        local ? this.storage = sessionStorage : this.storage = localStorage;
        this.key = setKey;
    };
    StorageLocalService.prototype.stringing = function (data) {
        return JSON.stringify(data);
    };
    StorageLocalService.prototype.sendUniqueData = function (data) {
        this.storage.setItem(this.key, data);
    };
    StorageLocalService.prototype.sendMoreADate = function (data) {
        var dados = JSON.parse(this.callJSON() || '[]');
        dados.push(data);
        this.storage.setItem(this.key, this.stringing(dados));
    };
    StorageLocalService.prototype.callJSON = function () {
        return this.storage.getItem(this.key);
    };
    StorageLocalService = __decorate([
        core_1.Injectable({
            providedIn: shared_module_1.SharedModule
        })
    ], StorageLocalService);
    return StorageLocalService;
}());
exports.StorageLocalService = StorageLocalService;
