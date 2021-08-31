import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutModule } from './about/about.module';
import { CommunityModule } from './community/community.module';
import { FilmesModule } from './filmes/filmes.module';
import { HomeModule } from './home/home.module';
import { SeriesModule } from './series/series.module';
import { LogInFormModule } from './log-in-form/log-in-form.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    AboutModule,
    CommunityModule,
    FilmesModule,
    HomeModule,
    SeriesModule,
    LogInFormModule,
    SharedModule
  ],
  exports:[]
})
export class FeaturesModule { }
