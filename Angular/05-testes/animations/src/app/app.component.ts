import { Component } from '@angular/core';
import { animations } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    animations().adjwidth('200px', '250px', '500'),
    animations().fadeState(),
    animations().girar('90', '2000'),
    animations().mover('200', '1500'),
  ]
})

export class AppComponent {
  state: string = 'back';
  state1: string = 'show';
  state2: string = 'back';
  state3!: string;

  constructor() { }
  ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', component:'a' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', component:'a'},
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', component:'a' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', component:'a' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', component:'a' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', component:'a' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', component:'a' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', component:'a' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', component:'a' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', component:'a' },
  ];


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','component'];
  dataSource = this.ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}