import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'app/login/auth.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad{

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }


  canActivate(
    route:ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | boolean{
    return this.vereficarAcesso()
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.vereficarAcesso()
  }

  private vereficarAcesso(){
    if(this.authService.usuarioEstaAutenticado()){
      return true
    }
    this.router.navigate(['/login'])
    return false
  }
}
