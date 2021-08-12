import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { CrudService } from '../shared/services/crud.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {

  // @Input()

  @Input() isExclude: boolean = false;
  infoFilmes: any
  rotaAtiva:any
  constructor(
    private http: CrudService,
    private form: FormBuilder,
    private route: Router) { }

  ngOnInit(): void {
    this.http.returnList().subscribe(value => {
      this.infoFilmes = value
    })
  }
  showModal(id: number){
    this.changeRoute('exclude',id)
  }
  onView(id:number){
    this.changeRoute('view',id)
  }
  onEdit(id:number){
    this.changeRoute('edit',id)
  }
  changeRoute(type:string,id:number){
    this.rotaAtiva = this.route.url
    this.route.navigate([`${this.rotaAtiva}/${type}`,id])
  }
}
