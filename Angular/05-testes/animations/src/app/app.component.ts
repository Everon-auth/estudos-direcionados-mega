import { Component } from '@angular/core';
import { animations } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    animations().adjwidth('200px','250px','500'),
    animations().fadeState()
  ]
})
export class AppComponent {
  state: string = 'back';
  state1: string = 'show';

  constructor() { }

  onclick() {
    this.state == 'back' ? this.state = 'adjustWidth' : this.state = 'back';
    this.state1 == 'show' ? this.state1 = 'hide' : this.state1 = 'show';
  }

}
