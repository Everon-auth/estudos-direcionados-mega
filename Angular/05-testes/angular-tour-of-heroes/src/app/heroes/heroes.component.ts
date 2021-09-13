import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { take } from 'rxjs/operators';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit, OnDestroy {
  hero!: Hero[];
  selectedHero: any;
  subs!: Subscription;

  constructor(
    private heroService: HeroService,
    private msg: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.msg.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  add(name: string) {
    name = name.trim();
    if (!name) return;
    this.heroService.newHero({ name } as Hero).pipe(take(1)).subscribe(_ => this.getHeroes())
  }
  delete(hero: Hero) {
    if (hero) {
      this.heroService.delHero(hero.id).pipe(take(1)).subscribe(_ => this.getHeroes())
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  private getHeroes() {
    this.subs = this.heroService.getHeroes().subscribe(
      hero => {
        this.hero = hero
        console.log('a')
      }
    )
  }
}
