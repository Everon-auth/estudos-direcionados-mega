import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './heroes/hero';
import { MessageService } from './message.service';

import { HEROES } from './MOCK/mock';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private msg: MessageService,
  ) { }
  
  getHeroes(): Observable<Hero[]> {
    const hero = of(HEROES);
    this.msg.add('HeroService: Fetched heroes')
    return hero;
  }
}
