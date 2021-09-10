import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
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
    this.subs = this.heroService.getHeroes().subscribe(hero => this.hero = hero);
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.msg.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
