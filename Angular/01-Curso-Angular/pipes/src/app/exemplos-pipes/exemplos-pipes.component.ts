import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning Javascript Design patterns',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016,5,23),
    url: 'https://a.co/glqjpRP'
  };

  filtro: string;
  livros: string[] = ['Angular', 'Javascript']
  constructor() { }

  ngOnInit() {
  }

  addCurso(valor){
    this.livros.push(valor)
  }

  obterCursos(){
    if(this.livros.length ===0 || this.filtro === undefined || this.filtro.trim() === '') return this.livros;

    return this.livros.filter((v) =>{
      if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >=0){
        return true;
      }
      return false;
    });
  };

  valorAsync = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve('valor assíncrono'),2000)
  })

  valorAsync2 = Observable.interval(2000)
  .map(valor => 'valor assíncrono2')

};

/*   Questão de performance usar o filtro nos componentes direto, não criar pipes com o filtro. */