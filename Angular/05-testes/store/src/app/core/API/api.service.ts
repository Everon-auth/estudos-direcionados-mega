import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { UserSubscriber } from 'src/app/features/auth-component/signin/sign-in-form/UserSubscriber';


@Injectable({
  providedIn: CoreModule
})
export class APIService {

  constructor(
    private http: HttpClient,
  ) { }
  tryLogin() {
    return this.http.get(environment.API_URL).pipe(take(1));
  }
  sendUser(data: UserSubscriber) {
    return this.http.post(`${environment.API_URL}`, data).pipe(take(1))
  }
}
/*   private catchUser(User: UserSubscriber) {
    let allUser: any
    let status: boolean = false
    this.tryLogin().subscribe(
      success => allUser = success,
      error => {
        throw new Error(`Erro ao requisitar informações do servidor. ERRO: ${error}`),
        () => status = true
      })
  } */