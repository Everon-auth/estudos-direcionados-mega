import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModulesModule } from './modules/materialmodules.module';
import { SharedComponentsModule } from './components/shared-components.module';
import { HttpClientModule } from '@angular/common/http';
import { CepService } from './services/cep.service';
import { ComprasService } from './services/compras.service';
import { ReactiveFormsModule } from '@angular/forms';
import { StorageLocalService } from './services/storage-local.service';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],exports:[
    MaterialModulesModule,
    SharedComponentsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[
    CepService,
    ComprasService,
    StorageLocalService
  ]
})
export class SharedModule { }
