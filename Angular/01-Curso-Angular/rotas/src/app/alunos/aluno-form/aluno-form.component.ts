import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IformCanDeactivate } from 'app/guards/iform-candeactivate';
import { Subscription } from 'rxjs/Rx';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IformCanDeactivate{
  data: any
  aluno: any;
  inscricao: Subscription;
  formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id: number = params['id']

        this.aluno = this.alunosService.getAluno(id)

       if(this.aluno == null){
          this.router.navigate(['not-found'])
        } 
      }
    );

  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
  sendValue(){
    this.alunosService.editAlunos(this.data)
  }
  onInput(){
    this.formMudou = true;
  }
  poodeMudarRota(){
    if(this.formMudou) {
      const confirmation = confirm('tem certeza que deseja sair dessa pagina?')
      if(!confirmation) return false
    };
  
    return true;  
  }
  podeDesativar(){
    return this.poodeMudarRota();
  }
}
