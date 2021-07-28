import { Component, OnInit, NgModule, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {

  @Input() valorInicial: number = 10;
  constructor() {
    this.log('constructor')
  }

  ngOnInit() {
    this.log('ngOnInit')
  }
  ngOnChanges(){
    this.log('ngOnChange')
  }
  ngDoCheck(){
    this.log('ngDoCheck')
  }
  ngAfterContentInit(){
    this.log('ngAfterContentInit')
  }
  ngAfterContentChecked(){
    this.log('ngAfterContentChecked')
  }
  ngAfterViewChecked(){
    this.log('ngAfterViewChecked')
  }
  ngOnDestroy(){
    this.log('ngOnDestroy')
  }

  log(vl){
    console.log(vl)
  }
}
