import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from './modal/modal.module';
import { AngularModulesModule } from './angular-modules/angular-modules.module';
import { MaterialModulesModule } from './angular-modules/material-modules.module';
import { VerifyComponent } from './components/verify/verify.component';


@NgModule({
  declarations: [
    VerifyComponent,
  ],
  imports: [
    CommonModule,
    ModalModule,
  ],
  exports: [
    VerifyComponent,
    ModalModule,
    AngularModulesModule,
    MaterialModulesModule,

  ]
})
export class SharedModule { }
