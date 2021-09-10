import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navShow: boolean = false;
  spinnerShow: boolean = false;
  info: any

  constructor(
  ) {
  }

  ngOnInit() {
  }
}


