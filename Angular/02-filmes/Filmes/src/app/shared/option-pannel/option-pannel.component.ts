import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-option-pannel',
  templateUrl: './option-pannel.component.html',
  styleUrls: ['./option-pannel.component.scss']
})
export class OptionPannelComponent implements OnInit {


  constructor() { }

  @Output() clicked: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
  }

  onExclude(){
    this.clicked.emit(true)
  }
}
