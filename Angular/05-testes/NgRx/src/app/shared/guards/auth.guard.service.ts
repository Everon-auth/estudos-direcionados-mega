import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthguardService implements CanActivate {

    sidenavEvent = new EventEmitter<boolean>();
    constructor(
        private auth: AuthService,
        private router: Router,
    ) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | Observable<boolean> | boolean {

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
}
