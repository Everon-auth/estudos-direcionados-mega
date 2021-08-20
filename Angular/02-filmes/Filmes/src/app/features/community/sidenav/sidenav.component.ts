import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() showFiller = true;
  options: any = [{
    label: 'option1',
    value: 'option'

  }]
  constructor() { }

  ngOnInit(): void {
  }
  category(value:any){
    console.log(value)
  }
}
