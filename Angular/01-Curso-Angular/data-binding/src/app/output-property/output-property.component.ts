import { Component, Input, OnInit } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor = 0;

  mudouValor = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }
  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }
}
