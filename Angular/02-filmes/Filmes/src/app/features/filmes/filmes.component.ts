import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { Subscription } from 'rxjs';
import { PaginationService } from 'src/app/shared/services/paginator/pagination.service';
import { CrudService } from '../../shared/services/crud/crud.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit, OnDestroy {

  infoFilmes: any
  subscription!: Subscription;
  datalog: string = `Carregando...`
  dataStats: boolean = false
  showProgress: boolean = true
  pIndex:any = 0

  pageSizeOptions: number[] = [5, 10, 25, 100];
  length: any;
  pageSize = 10;
  transmitFilms: any

  constructor(
    private http: CrudService,
    private paginatin: PaginationService) { }

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
      },
      () => {
        this.length = Math.ceil(this.infoFilmes.length)
        this.transmitFilms = this.paginatin.pagination(this.infoFilmes, this.pageSize,this.pIndex)
      })
  }
  reload() {
    this.showProgress = true
    this.datalog = 'Carregando...'
    this.onLoad()
  }
  onDelclick(value: any) {
  }
  onPaginationEvent(event:PageEvent){
    this.pageSize = event.pageSize
    this.pIndex = event.pageIndex
    this.onLoad()
  }
}
