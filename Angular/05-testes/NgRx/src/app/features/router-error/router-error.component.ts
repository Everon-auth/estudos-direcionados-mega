import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-router-error',
  templateUrl: './router-error.component.html',
  styleUrls: ['./router-error.component.scss']
})
export class RouterErrorComponent implements OnInit {
  message!: string
  Rota: any
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.message = `Oops. Parece que este caminho está inacessível ou inexistente.`;
    this.Rota = `${environment.Domain}${this.router.url}`
  }
  back() {
    window.history.back()
  }
}
