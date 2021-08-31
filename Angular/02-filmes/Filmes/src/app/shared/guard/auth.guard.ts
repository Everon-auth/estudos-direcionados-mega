import { Injectable, EventEmitter } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  loading = new EventEmitter<boolean>()

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    this.loading.emit(true)
    if (this.authService.userAuth()) {
      this.loading.emit(false)
      return true;
    } else {
      this.loading.emit(false)
      this.router.navigate(['/login']);
      return false;
    }
  }
}
