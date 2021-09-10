import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {


  constructor(
    private dialogRef: MatDialogRef<FilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuild: FormBuilder
  ) { }


  ngOnInit(): void {
    this.data = this.formBuild.group({
      min: [null],
      max: null
    })
  }
  closeDialog(): void {
    this.dialogRef.close(this.data.value);
  }

}