import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstadoBR } from '../models/estado-br.model';

@Injectable()
export class DropdownService {

  constructor(
    private http: HttpClient,
    ) { }

  getEstadosBR() {
    return this.http.get<EstadoBR[]>('assets/data/estadosbr.json');
  }
  getCargos(){
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr' },
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' },
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr' },
    ];
  }
  getTecnologias(){
    return[
      { nome: 'java', desc: 'Java' },
      { nome: 'Javascript', desc: 'Javascript' },
      { nome: 'PHP', desc: 'PHP' },
      { nome: 'Ruby', desc: 'Ruby' },
    ]
  }
}