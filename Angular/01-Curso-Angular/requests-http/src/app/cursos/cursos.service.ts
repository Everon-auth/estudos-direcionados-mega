import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Curso } from '../models/curso';
import { delay, tap } from 'rxjs/operators'
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

}