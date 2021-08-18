import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Input() error:any
  @Output() isErr= new EventEmitter
  constructor(
  ) { }

  ngOnInit(): void {

  }

  closeError(){
    this.isErr.emit({value:false})
  }
}
