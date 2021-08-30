import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './core/auth/auth.service';
import { SearchService } from './shared/services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  subscriber!: Subscription;
  showMenu: boolean = false
  subscription!: Subscription
  search: any;
  constructor(
    private auth: AuthService,

  ) { }
  ngOnInit(): void {
    this.subscriber = this.auth.mostrarMenuEmitter.subscribe(
      success => this.showMenu = success
    );
  }

}
