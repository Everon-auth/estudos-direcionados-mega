import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TermsComponent } from '../terms/terms.component';

@Component({
  selector: 'app-sig-in-form',
  templateUrl: './sig-in-form.component.html',
  styleUrls: ['./sig-in-form.component.scss']
})
export class SigInFormComponent implements OnInit, OnDestroy {

  subcription!: Subscription
  check: boolean = false

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(TermsComponent);

    this.subcription = dialogRef.afterClosed().subscribe(result => {
      this.check = result
    });
  }
  ngOnDestroy() {
    this.subcription.unsubscribe()
  }
}
