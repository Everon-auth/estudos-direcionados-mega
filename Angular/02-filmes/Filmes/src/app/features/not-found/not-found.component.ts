import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  rota!:string
  constructor(
    private activeroute:Router
  ) { }

  ngOnInit(): void {
    this.rota = `http://localhost:8080${this.activeroute.url}`
  }
  back(){
    window.history.back()
  }
}
