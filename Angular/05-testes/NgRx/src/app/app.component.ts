import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { AuthguardService } from './shared/guards/auth.guard.service';

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
    private http: HttpClient,
  ) {
  }

  ngOnInit() {
    this.http.get(`http://localhost:3000/tokenValidate/tjtnB0Qrt7BubkFX0SVxyu-oXq5zOHcqRpX2DBgeY38`).pipe(take(1)).subscribe(subs => console.log(subs))
    this.guard.sidenavEvent.subscribe(
      value => this.navShow = value
    )
    document.cookie = 'nome= John'
    document.cookie = 'sobrenome= Doe'
  }
}


