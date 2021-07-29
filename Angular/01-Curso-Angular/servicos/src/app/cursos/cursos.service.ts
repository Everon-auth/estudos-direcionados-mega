import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service'
@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();

  private cursos: string[] = ['Angular 2', 'Java', 'PhoneGap'];
  constructor(
    private LogService: LogService
  ){
    console.log('getCursos');
   }

  getCursos(){
    return this.cursos;
  }
  addCurso(curso:string){
    this.cursos.push(curso)
    this.emitirCursoCriado.emit(curso)
    this.LogService.consoleLog(curso)
  }
}
