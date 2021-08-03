import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFormComponent } from './data-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    DataFormComponent,
  ]
})
export class DataFormModule { }
