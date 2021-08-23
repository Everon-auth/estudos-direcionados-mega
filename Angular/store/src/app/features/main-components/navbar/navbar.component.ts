import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  itens!:number;
  categorias:any = ['Eletrônicos'];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log()
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
