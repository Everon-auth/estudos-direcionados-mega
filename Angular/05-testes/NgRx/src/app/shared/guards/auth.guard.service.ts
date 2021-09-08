import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthguardService implements CanActivate, CanActivateChild, CanLoad {

    sidenavEvent = new EventEmitter<boolean>();
    constructor(
        private auth: AuthService,
        private router: Router,
    ) { }
    canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
        return this.load(route)
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.authorized(childRoute)
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | Observable<boolean> | boolean {

        return this.authorized(route)
    }

    private authorized(route: ActivatedRouteSnapshot) {
        if (this.auth.isAuth()) {
            route.url.toString() == 'login' ? this.router.navigate(['home']) : null;
            this.sidenavEvent.emit(true)
            return true;
        }
        else {
            this.router.navigate(['login']);
            this.sidenavEvent.emit(false)
            return false;
        }
    }
    private load(route: Route) {
        return this.auth.isAuth();

    }
}
