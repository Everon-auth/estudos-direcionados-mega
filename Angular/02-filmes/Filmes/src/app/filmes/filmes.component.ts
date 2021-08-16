import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CrudService } from '../shared/services/crud.service';

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
  constructor(
    private http: CrudService,
    private route: Router) { }

  ngOnInit(): void {
    this.onLoad()
  }
  showModal(id: number) {
    this.changeRoute('exclude', id)
  }
  onView(id: number) {
    this.changeRoute('view', id)
  }
  onEdit(id: number) {
    this.changeRoute('edit', id)
  }
  changeRoute(type: string, id: number) {
    this.rotaAtiva = this.route.url
    this.route.navigate([`${this.rotaAtiva}/${type}`, id])
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onDelclick(value: any) {
    console.log(value)
  }
  onLoad() {
    this.subscription = this.http.returnList().subscribe(
      success => {
        this.infoFilmes = success
        if (this.infoFilmes.length == 0) {
          this.datalog = 'Não encontramos nenhum filme, Gostaria de inserir algum?'
          this.dataStats = true
        }
      },
      error => this.datalog = `
      Ocorreu um Erro inesperado, tente novamente mais tarde!
      ( Erro: ${error.statusText} )`)
  }
  reload() {
    this.datalog = 'Carregando...'
    this.onLoad()
  }
}
