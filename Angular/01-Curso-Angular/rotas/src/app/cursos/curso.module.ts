import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PaginaNaoEncontradaComponent } from "app/pagina-nao-encontrada/pagina-nao-encontrada.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursosComponent } from "./cursos.component";
import { CursosService } from "./cursos.service";


@NgModule({
    imports:[
        CommonModule
    ],
    exports:[],
    declarations:[
        CursosComponent,
        CursoDetalheComponent,
        PaginaNaoEncontradaComponent
    ],
    providers:[CursosService],
})

export class CursosModule {}