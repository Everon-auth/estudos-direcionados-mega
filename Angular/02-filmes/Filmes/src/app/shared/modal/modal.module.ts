import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ShadowModalComponent } from './shadow-modal/shadow-modal.component';



@NgModule({
  declarations: [ModalComponent,
  ShadowModalComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ModalComponent,
    ShadowModalComponent
  ]
})
export class ModalModule { }
