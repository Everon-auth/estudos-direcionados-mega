import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { AuthComponentModule } from './auth-component/auth-component.module';
import { MainComponentsModule } from './main-components/main-components.module';
import { CartComponentsModule } from './cart-components/cart-components.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    AuthComponentModule,
    MainComponentsModule,
    CartComponentsModule,
    SharedModule
  ]
})
export class FeaturesModule { }
