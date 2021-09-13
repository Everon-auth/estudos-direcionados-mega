import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero: any;


  constructor(
    private route: ActivatedRoute,
    private heroes: HeroService,
  ) { }

  ngOnInit(): void {
    this.getHero()
  }

  getHero() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.heroes.getHeroById(id)
      .pipe(take(1))
      .subscribe(
        hero => this.hero = hero
      )
  }
  save() {
    if (this.hero) {
      this.heroes.savehero(this.hero)
        .pipe(take(1))
        .subscribe(
          _ => this.goBack()
        )
    }
  }
  goBack() {
    window.history.back();
  }
}
