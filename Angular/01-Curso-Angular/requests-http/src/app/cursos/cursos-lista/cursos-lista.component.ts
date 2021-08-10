import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit{

/*   cursos: Curso[]; */
  cursos$: Observable<Curso[]>
  error$= new Subject<boolean>();

  constructor(
    private service: CursosService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }


  ngOnInit() {
    // this.service.list().subscribe(dados => this.cursos = dados)
/*     this.cursos$ = this.service.list()
    .pipe(
      catchError(error =>{
        this.error$.next(true)
        return EMPTY;
      })
    ) */
    this.onRefresh()
  }
  onRefresh(){
    this.cursos$ = this.service.list()
    .pipe(
      catchError(error =>{
        this.error$.next(true)
        return EMPTY;
      })
    )
  }
  onDelete(curso:Curso){
    const del = confirm(`Você tem certeza que deseja excluir o curso ${curso.nome}`)
    if(del){
      this.service.delete(curso).subscribe(
        () => this.onRefresh()
      )
    }
      
    
  }
  onEdit(id){
    this.router.navigate(['editar',id],{relativeTo: this.route})
  }
}
