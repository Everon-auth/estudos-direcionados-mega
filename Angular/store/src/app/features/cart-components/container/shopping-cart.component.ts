import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  nAddr:boolean = true
  loading:boolean = false
  constructor(

  ) { }

  ngOnInit(): void {

  }
  a(evt:any){
    console.log(evt)
  }
}
