import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './core/auth/auth.service';
import { AuthGuardService } from './shared/guard/auth.guard';
import { RegistryType } from './shared/models/registryType';
import { UserLogs } from './shared/models/UserLogs';
import { DateFormatService } from './shared/services/datetime/dateFormat.service';
import { UserLogsService } from './shared/services/logs/user-logs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  subscriber!: Subscription;
  showMenu: boolean = false;
  subscription!: Subscription
  search: any;
  load: boolean = true

  constructor(
    private auth: AuthService,
    private guard: AuthGuardService,
    private test: UserLogsService,
    private date: DateFormatService,
  ) { }
  ngOnInit(): void {
    this.subscriber = this.auth.mostrarMenuEmitter.subscribe(
      success => {
        this.showMenu = success
      }
    );
    this.guard.loading.subscribe((subs: boolean) => this.load = subs)
  }

}
