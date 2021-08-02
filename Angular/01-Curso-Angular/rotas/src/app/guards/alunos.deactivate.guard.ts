import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { AlunoFormComponent } from 'app/alunos/aluno-form/aluno-form.component';
import { Observable } from 'rxjs/Rx';
import { IformCanDeactivate } from './iform-candeactivate';

@Injectable()
export class AlunosDeactiveGuard implements CanDeactivate<IformCanDeactivate> {
  constructor() { }
  canDeactivate(component: IformCanDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log('a')
    //return component.poodeMudarRota();
    return component.podeDesativar();
  }
}