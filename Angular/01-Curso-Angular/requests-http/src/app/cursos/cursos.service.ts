import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Curso } from '../models/curso';
import { delay, take, tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  private readonly API = `${environment.API}cursos`

  list(){
    return this.http.get<Curso[]>(this.API)
    .pipe(
      delay(1000),
      tap(console.log));
  }
  prepair(data){
    return this.http.post(this.API,data).pipe(take(1));
  }
  genID(){
    let id:number;
    this.list().subscribe(d =>id = d++);
    return id;
  }
  loadByID(id){
    return this.http.get(`${this.API}/${id}`).pipe(take(1));
  }
}