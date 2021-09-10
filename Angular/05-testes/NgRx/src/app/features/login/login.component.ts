import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  view:string = 'visibility_off'
  constructor() { }

  ngOnInit(): void {
  }

}
