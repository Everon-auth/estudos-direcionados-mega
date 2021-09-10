import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatCardModule,
    MatCommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class MaterialModule { }
