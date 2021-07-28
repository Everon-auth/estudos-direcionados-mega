import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'https://loiane.com'
  cursoAngular = true;
  urlImagem = 'http://lorempixel.com/400/200'
  valorAtual;
  valorSalvo;
  isMouseOver: boolean = false;

  nome = 'abc';


  nomeDoCurso = 'Angular';

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true
  }

  botaoClicado(){
    alert('Botão clicado!')
  }

  onKeyUp(evento){
    console.log()
    this.valorAtual = evento.value
  }
  salvarValor(valor){
    this.valorSalvo = valor
  }
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver
  }
  onMudouValor(evento){
    console.log(evento.novoValor)
  }
  constructor() {

  }

  ngOnInit() {
  }

}
