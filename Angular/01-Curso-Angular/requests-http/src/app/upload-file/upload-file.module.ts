import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from './upload-file.component';
import { UploadRoutingModule } from './upload-file.routing.module';

@NgModule({
  declarations: [ 
    UploadFileComponent,
  ],
  imports: [
    CommonModule,
    UploadRoutingModule,
  ],
  exports: [
    UploadRoutingModule,
  ]
})
export class UploadFileModule { }
