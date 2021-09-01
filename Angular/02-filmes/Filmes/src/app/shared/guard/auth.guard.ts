import { Injectable, EventEmitter } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { EventLogs } from '../models/EventLogs';
import { StorageLocalService } from '../services/storage/storage-local.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  loading = new EventEmitter<boolean>()
  log = new EventEmitter<EventLogs>()
  user: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: StorageLocalService,
  ) {
    this.storage.config(true, "UserAccount")
    this.user = JSON.parse(this.storage.callJSON());
    this.user ? this.justSend() : null
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    this.loading.emit(true)
    if (this.authService.userAuth()) {
      this.EventLogs(route)
      this.loading.emit(false)
      return true;
    } else {
      this.EventLogs(route, 'Acesso à rota bloqueado')
      this.loading.emit(false)
      this.router.navigate(['/login']);
      return false;
    }
  }
  EventLogs(route: ActivatedRouteSnapshot, error: string = '', action: string = 'try acess route') {
    this.log.emit({
      Route: `http://localhost:8080/${route.url[0] ? route.url[0].path : ''}`,
      Error: error,
      action: action
    })
  }
  justSend() {
    this.authService.getuserANDlogin(this.user)
  }
}
