import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeroService } from '../hero.service';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  heroes!: Hero[];

  subs!: Subscription;
  constructor(
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    this.subs = this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes.slice(1, 5),
      error => { throw new Error(` Não foi possível trazer os dados dos Heroes, tente novamente mais tarde`) }
    )
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
