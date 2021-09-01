import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/core/auth/auth.service';
import { AuthGuardService } from '../../guard/auth.guard';
import { EventLogs } from '../../models/EventLogs';
import { RegistryType } from '../../models/registryType';
import { UserLogs } from '../../models/UserLogs';
import { CrudService } from '../crud/crud.service';
import { DateFormatService } from '../datetime/dateFormat.service';

@Injectable({
  providedIn: 'root'
})
export class UserLogsService {
  private API_URL: string = `http://localhost:8000/Users`
  private User!: UserLogs;


  user: UserLogs = this.auth.user;
  log!: RegistryType;



  constructor(
    private crud: CrudService,
    private guard: AuthGuardService,
    private date: DateFormatService,
    private auth: AuthService

  ) {
    this.guard.log.subscribe((event: EventLogs) => {
      this.log = {
        access: event.Route,
        dateTime: [{
          dia: this.date.dateNow().dialog,
          hora: this.date.dateNow().horalog
        }],
        Errors: event.Error,
        action: event.action,
      }
      console.log(this.user)
      this.user? this.registry(this.user) : null
    })
  }

  registry(data: UserLogs ) {
    data.log.push(this.log)
    this.crud.updateData(data, this.API_URL).subscribe()
  }
  catchLogbyUser(user: UserLogs) {
    this.crud.returnList(this.API_URL).pipe(
      map((data: any) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].email == user.email) return data[i]
        }
      })).
      subscribe(
        (res: any) => this.User = res,
        error => { throw new Error(`Falha ao requisitar os dados do usuário. Resposta : ${error.message}`) },
        () => this.registry(this.User)
      )
  }
}
