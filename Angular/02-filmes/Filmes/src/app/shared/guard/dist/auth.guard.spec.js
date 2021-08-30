"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var auth_guard_1 = require("./auth.guard");
describe('AuthGuardService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(auth_guard_1.AuthGuardService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
