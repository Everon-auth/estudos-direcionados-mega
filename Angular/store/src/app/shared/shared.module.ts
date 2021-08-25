import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModulesModule } from './modules/materialmodules.module';
import { SharedComponentsModule } from './components/shared-components.module';
import { HttpClientModule } from '@angular/common/http';
import { CepService } from './services/cep.service';
import { ComprasService } from './services/compras.service';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],exports:[
    MaterialModulesModule,
    SharedComponentsModule,
    HttpClientModule
  ],
  providers:[
    CepService,
    ComprasService
  ]
})
export class SharedModule { }
