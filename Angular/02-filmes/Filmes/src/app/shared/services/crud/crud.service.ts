import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { take } from 'rxjs/operators'
import { UserLogs } from '../../models/UserLogs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  readonly API_URL = 'http://localhost:8000/films/'

  constructor(
    private http: HttpClient,
  ) { }
  returnList(url: any = this.API_URL) {
    return this.http.get(url)
  }
  addData(data: any, url: any = this.API_URL) {
    return this.http.post(url, data).pipe(take(1))
  }
  deleteData(data: string, url: any = this.API_URL) {
    return this.http.delete(`${url}${data}`).pipe(take(1));
  }
  updateData(data:UserLogs, url:string){
    return this.http.put(`${url}/${data.id}`,data).pipe(take(1))
  }
}
