import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from './auth';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    constructor(
        private _authService: Auth,
        private _router: Router
    ) { }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this._authService.getToken()) {
            return true;
        }
        this._router.navigate(['/login']);
        return false;
    }
}