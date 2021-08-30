"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var not_found_component_1 = require("./features/not-found/not-found.component");
var auth_guard_1 = require("./shared/guard/auth.guard");
var routes = [
    {
        path: 'home',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./features/home/home.module'); }).then(function (m) { return m.HomeModule; }); },
        canActivate: [auth_guard_1.AuthGuardService]
    },
    {
        path: 'films',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./features/filmes/filmes.module'); }).then(function (m) { return m.FilmesModule; }); },
        canActivate: [auth_guard_1.AuthGuardService]
    },
    {
        path: 'community',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./features/community/community.module'); }).then(function (m) { return m.CommunityModule; }); },
        canActivate: [auth_guard_1.AuthGuardService]
    },
    {
        path: 'series',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./features/series/series.module'); }).then(function (m) { return m.SeriesModule; }); },
        canActivate: [auth_guard_1.AuthGuardService]
    },
    {
        path: 'about',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./features/about/about.module'); }).then(function (m) { return m.AboutModule; }); },
        canActivate: [auth_guard_1.AuthGuardService]
    },
    {
        path: '',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./features/home/home.module'); }).then(function (m) { return m.HomeModule; }); },
        canActivate: [auth_guard_1.AuthGuardService]
    },
    {
        path: 'login',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./features/log-in-form/log-in-form.module'); }).then(function (m) { return m.LogInFormModule; }); }
    },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
