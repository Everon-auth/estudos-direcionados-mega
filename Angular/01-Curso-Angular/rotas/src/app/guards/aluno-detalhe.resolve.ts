import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Aluno } from 'app/alunos/alunos';
import { AlunosService } from 'app/alunos/alunos.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {
    constructor(private alunosService: AlunosService){}

    resolve(route: ActivatedRouteSnapshot): 
    Observable<Aluno> | Promise<Aluno> | Aluno {
        
        let id = route.params['id'];
        
        return this.alunosService.getAluno(id);
    }
}