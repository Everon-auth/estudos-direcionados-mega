import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService<T> {

  constructor(
    protected http: HttpClient,
    private API_URL
  ) { }

  list(){
    return this.http.get<T>(this.API_URL)
    .pipe(
      delay(1000),
      tap(console.log));
  }
  send(data){
    return this.http.post(this.API_URL,data).pipe(take(1));
  }
  loadByID(id){
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }
  update(data){
    return this.http.put(`${this.API_URL}/${data.id}`,data).pipe(take(1));
  }
  save(data){
    if(data.id){
      return this.update(data)
    }
    else{
      return this.send(data)
    }
  }
  delete(data){
    return this.http.delete(`${this.API_URL}/${data.id}`).pipe(take(1));
  }
}
