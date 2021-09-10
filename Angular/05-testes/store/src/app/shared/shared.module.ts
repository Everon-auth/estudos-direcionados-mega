import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsModule } from './components/shared-components.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router'
import { MaterialModulesModule } from './modules/materialmodules.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ], exports: [
    SharedComponentsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule,
    RouterModule,
    MaterialModulesModule
  ]
})
export class SharedModule { }
