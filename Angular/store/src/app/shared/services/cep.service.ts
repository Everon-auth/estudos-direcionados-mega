import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators'

@Injectable()

export class CepService {

  API_URL = 'https://viacep.com.br/ws/'
  constructor(
    private http: HttpClient
    )  {}
    getCEP(cep:string){
      return this.http.get(`${this.API_URL}${cep}/json`).pipe(take(1))
    }
}
