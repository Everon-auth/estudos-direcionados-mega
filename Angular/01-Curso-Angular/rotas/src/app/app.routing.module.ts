import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlunosGuard } from "./guards/alunos.guard";
import { AuthGuardService } from "./guards/auth.guard.service";
import { CursosGuard } from "./guards/cursos.guard";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";

const appRoutes: Routes = [
    {path:'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule',
    canActivate: [AuthGuardService],
    canActivateChild: [CursosGuard],
    },
    {path:'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule',
    canActivate: [AuthGuardService],
    canActivateChild: [AlunosGuard],
    },
    {path: 'not-found', component: PaginaNaoEncontradaComponent,
    canActivate: [AuthGuardService],
    },
    {path:'login', component:LoginComponent
    },
    {path: '', component: HomeComponent,
    canActivate: [AuthGuardService],
    },
    {path: '**', component: PaginaNaoEncontradaComponent}
]


@NgModule({
    imports:[
RouterModule.forRoot(appRoutes, {useHash : true}),
    ],
    exports:[
    RouterModule,
    ]

})
export class AppRoutingModule{}