import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ErrorRoutingModule } from './Error.routing.module';
import { RouterErrorComponent } from './router-error.component';

@NgModule({
  declarations: [
    RouterErrorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ErrorRoutingModule
  ],
})
export class ErrorModule { }
