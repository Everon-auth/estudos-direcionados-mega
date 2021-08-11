import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from './upload-file.component';
import { UploadRoutingModule } from './upload-file.routing.module';
import { UploadFileService } from './upload-file.service';

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
  ],
  providers:[
    UploadFileService
  ]
})
export class UploadFileModule { }
