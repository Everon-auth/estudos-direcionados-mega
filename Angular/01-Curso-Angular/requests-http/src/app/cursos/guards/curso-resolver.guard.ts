import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';

export class CursoResolverGuard implements Resolve<Curso>{
  constructor(private service: CursosService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Curso | Observable<Curso> | Promise<Curso> {
    if (route.params && route.params['id']) {
      return this.service.loadByID(route.params['id']);
    };
    return of({
      id: null,
      nome: null
    });
  };

}
