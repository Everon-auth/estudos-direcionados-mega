import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModulesModule } from './modules/materialmodules.module';
import { SharedComponentsModule } from './components/shared-components.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],exports:[
    MaterialModulesModule,
    SharedComponentsModule
  ],
})
export class SharedModule { }
