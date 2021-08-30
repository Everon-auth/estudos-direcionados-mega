"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FeaturesModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var about_module_1 = require("./about/about.module");
var community_module_1 = require("./community/community.module");
var filmes_module_1 = require("./filmes/filmes.module");
var home_module_1 = require("./home/home.module");
var series_module_1 = require("./series/series.module");
var log_in_form_module_1 = require("./log-in-form/log-in-form.module");
var not_found_component_1 = require("./not-found/not-found.component");
var shared_module_1 = require("../shared/shared.module");
var FeaturesModule = /** @class */ (function () {
    function FeaturesModule() {
    }
    FeaturesModule = __decorate([
        core_1.NgModule({
            declarations: [
                not_found_component_1.NotFoundComponent
            ],
            imports: [
                common_1.CommonModule,
                about_module_1.AboutModule,
                community_module_1.CommunityModule,
                filmes_module_1.FilmesModule,
                home_module_1.HomeModule,
                series_module_1.SeriesModule,
                log_in_form_module_1.LogInFormModule,
                shared_module_1.SharedModule
            ],
            exports: []
        })
    ], FeaturesModule);
    return FeaturesModule;
}());
exports.FeaturesModule = FeaturesModule;
