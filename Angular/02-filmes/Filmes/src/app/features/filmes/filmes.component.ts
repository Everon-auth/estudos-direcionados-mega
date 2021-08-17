import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CrudService } from '../../shared/services/crud.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit, OnDestroy {

  infoFilmes: any
  rotaAtiva: any
  subscription!: Subscription;
  datalog: string = `Carregando...`
  dataStats: boolean = false
  showProgress: boolean = true
  constructor(
    private http: CrudService,
    private route: Router) { }

  ngOnInit(): void {
    this.onLoad()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onLoad() {
    this.subscription = this.http.returnList().subscribe(
      success => {
        this.infoFilmes = success
        if (this.infoFilmes.length == 0) {
          this.datalog = 'Não encontramos nenhum filme, Gostaria de inserir algum?'
          this.dataStats = true
          this.showProgress = false
        }
      },
      error => {
        this.datalog = `
      Ocorreu um Erro inesperado, tente novamente mais tarde!
      ( Erro: ${error.statusText} )`
        this.showProgress = false
        throw new Error(`Não foi possível se conectar ao banco de dados.`)
      })
  }
  reload() {
    this.showProgress = true
    this.datalog = 'Carregando...'
    this.onLoad()
  }
  onDelclick(value: any) {
    console.log(value)
  }
}
