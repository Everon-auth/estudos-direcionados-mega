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

  // @Input()

  infoFilmes: any
  rotaAtiva: any

  constructor(
    private http: CrudService,
/*     public subscription: Subscription, */
    private route: Router) { }

  ngOnInit(): void {
    /* this.subscription =  */this.http.returnList().subscribe(value => this.infoFilmes = value)
    /* console.log(this.subscription) */
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
/*     this.subscription.unsubscribe() */
  }
}
