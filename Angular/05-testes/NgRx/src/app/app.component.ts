import { Component, OnInit } from '@angular/core';
import { AuthguardService } from './shared/guards/auth.guard.service';
import { HttpService } from './shared/services/httpService/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navShow: boolean = false;
  spinnerShow: boolean = false;

  constructor(
    private guard: AuthguardService,
    private httpTest: HttpService,
  ) {
  }

  ngOnInit() {
    this.guard.sidenavEvent.subscribe(
      value => this.navShow = value
    )
    this.httpTest.getdata("http://localhost:3000").unique().subscribe(value => console.log(value))
  }
}
