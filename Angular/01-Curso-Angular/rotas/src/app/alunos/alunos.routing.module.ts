import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AlunosDeactiveGuard } from "app/guards/alunos.deactivate.guard";
import { AlunosGuard } from "app/guards/alunos.guard";

import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunosComponent } from "./alunos.component";
import { AlunoDetalheResolver } from '../guards/aluno-detalhe.resolve'

const alunosRoutes = [
    {path: '', component: AlunosComponent,
    canActivateChild:[AlunosGuard],
    children:[
        {path: 'novo', component: AlunoFormComponent},
        {path: ':id', component: AlunoDetalheComponent,
            //resolve: { aluno : AlunoDetalheResolver }
    },
        {path: ':id/edit', component: AlunoFormComponent,
            canDeactivate: [AlunosDeactiveGuard]    
        },
    ],
},
]

@NgModule({
    declarations:[
        AlunosComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(alunosRoutes)
    ],
    exports:[

    ],
    providers:[

    ],
})

export class AlunosRoutingModule {}