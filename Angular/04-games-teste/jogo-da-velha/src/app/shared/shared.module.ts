import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularModulesModule } from './shared-modules/angular-modules.module';
import { MaterialModule } from './shared-modules/material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    AngularModulesModule,
    MaterialModule
  ]
})
export class SharedModule { }
