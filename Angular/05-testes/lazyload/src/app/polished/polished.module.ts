import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolishedRoutingModule } from './polished-routing.module';
import { PolishedComponent } from './polished.component';


@NgModule({
  declarations: [
    PolishedComponent
  ],
  imports: [
    CommonModule,
    PolishedRoutingModule
  ]
})
export class PolishedModule { }
