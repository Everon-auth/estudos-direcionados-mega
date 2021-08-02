import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';
import { AlunosDeactiveGuard } from 'app/guards/alunos.deactivate.guard';

@NgModule({
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
  ],
  declarations: [
    AlunoFormComponent, 
    AlunoDetalheComponent,
  ],
  providers:[
    AlunosService,
    AlunosDeactiveGuard,
  ]
})
export class AlunosModule { }
