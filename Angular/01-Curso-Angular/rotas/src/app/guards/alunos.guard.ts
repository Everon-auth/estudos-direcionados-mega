import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class AlunosGuard implements CanActivateChild {
  constructor() { }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    return true;
  
  }
}