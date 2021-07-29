import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers:[CursosService]
})
export class CursosComponent implements OnInit {

  Cursos: string[] = [];

  constructor( private _cursosService: CursosService) { }
  
  ngOnInit() {
    this.Cursos = this._cursosService.getCursos();

    this._cursosService.emitirCursoCriado.subscribe(
      curso => console.log(curso)
    );
  }

}

/*
  Primeira Importa a classe, depois declara ela no construtor, instancia ela numa variavel e utilzia a vatiavel pra acessar o escopo da classe especificada. (Pode ser instanciada como uma private também) 
  OBS: Não esquecer de instanciar em algum module para facilitar os imports e declarar as dependências.
*/