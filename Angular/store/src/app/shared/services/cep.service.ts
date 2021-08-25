import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()

export class CepService {
  private API_URL = 'https://viacep.com.br/ws/'
  constructor(
    private http: HttpClient
  ) { }
  getCEP(cep: string) {
    return this.http.get(`${this.API_URL}${cep}/json`)
  }
}
