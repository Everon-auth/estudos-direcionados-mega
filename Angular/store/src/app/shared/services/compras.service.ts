import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators'
import { Endereco } from '../models/endereco';
@Injectable()
export class ComprasService {

  private API_URL: string = "http://localhost:8000/"
  constructor(
    private http: HttpClient,
  ) { }
  getSavedEnd() {
    return this.http.get(`${this.API_URL}savedEnd`).pipe(take(1));
  }
  newEnd(data: Endereco) {
    return this.http.post(`${this.API_URL}savedEnd`, data).pipe(take(1));
  }
}
