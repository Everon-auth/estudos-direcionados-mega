import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos(){
    return [
      {id:0, nome:'Angular 2'},
      {id:1, nome:'Java'},
      {id:2, nome:'Javascript'}
     ]
  }
  
  getCurso(id:number){
    let cursos=this.getCursos();
    for (let i=0; i<cursos.length; i++){
      let curso = cursos[i]
      if(curso.id == id) {
        return curso;
      }
    }
    return null
  }
}
