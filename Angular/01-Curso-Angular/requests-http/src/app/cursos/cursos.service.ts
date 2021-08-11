import { HttpClient } from '@angular/common/http';

import { Curso } from '../models/curso';
import { take } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

export class CursosService {

  constructor(private http: HttpClient) { }

  private readonly API = `${environment.API}cursos`

  list(){
    return this.http.get<Curso[]>(this.API)
  }
  send(data){
    return this.http.post(this.API,data).pipe(take(1));
  }
  genID(){
    let id:number;
    this.list().subscribe((d:any) =>id = d++);
    return id;
  }
  loadByID(id){
    return this.http.get<Curso>(`${this.API}/${id}`).pipe(take(1));
  }
  update(curso){
    return this.http.put(`${this.API}/${curso.id}`,curso).pipe(take(1));
  }
  save(curso){
    if(curso.id){
      return this.update(curso)
    }
    else{
      return this.send(curso)
    }
  }
  delete(curso:Curso){
    return this.http.delete(`${this.API}/${curso.id}`).pipe(take(1));
  }
}
