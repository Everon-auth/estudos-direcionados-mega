import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from './modal/modal.module';
import { AngularModulesModule } from './angular-modules/angular-modules.module';
import { MaterialModulesModule } from './angular-modules/material-modules.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ModalModule,
  ],
  exports: [
    ModalModule,
    AngularModulesModule,
    MaterialModulesModule
  ]
})
export class SharedModule { }
