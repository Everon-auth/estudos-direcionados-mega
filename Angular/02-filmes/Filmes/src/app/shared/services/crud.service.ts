import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API_URL = 'http://localhost:3000/films/'

  private constructor(
    private http: HttpClient,
  ) { }
  returnList(url:any = this.API_URL){
    return this.http.get(url)
  }
  addData(data: any, url:any = this.API_URL){
    return this.http.post(url,data).pipe(take(1))
  }
  deleteData(data:string, url:any = this.API_URL){
    return this.http.delete(`${url}${data}`).pipe(take(1));
  }
}
