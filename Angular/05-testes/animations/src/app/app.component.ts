import { Component } from '@angular/core';
import { animations } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    animations().adjwidth('200px', '250px', '500'),
    animations().fadeState(),
    animations().girar('90','2000'),
    animations().mover('200','1500'),
  ]
})
export class AppComponent {
  state: string = 'back';
  state1: string = 'show';
  state2: string = 'back';
  state3!: string;

  constructor() { }

  onclick() {
    this.state == 'back' ? this.state = 'adjustWidth' : this.state = 'back';
    this.state1 == 'show' ? this.state1 = 'hide' : this.state1 = 'show';
    this.state2 == 'back' ? this.state2 = 'turn180' : this.state2 = 'back';
    this.state3 == 'moving' ? this.state3 = 'back' : this.state3 = 'moving';
  }

}
