import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { RouterModule } from '@angular/router';
import { AngularModule } from './modules/angular.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    RouterModule,
    AngularModule,
  ]
})
export class SharedModule { }