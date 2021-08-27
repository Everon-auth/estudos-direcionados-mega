import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { APIService } from 'src/app/core/API/api.service';
import { TermsComponent } from '../terms/terms.component';
import { UserSubscriber } from './UserSubscriber';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sig-in-form',
  templateUrl: './sig-in-form.component.html',
  styleUrls: ['./sig-in-form.component.scss']
})
export class SigInFormComponent implements OnInit, OnDestroy {

  subcription!: Subscription
  check: boolean = false
  formData: any;
  pattern = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'

  constructor(
    private dialog: MatDialog,
    private formbuilder: FormBuilder,
    private api: APIService,
    private _snackBar: MatSnackBar,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.formData = this.formbuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(8), Validators.pattern(this.pattern)]],
      repSenha: [null, Validators.required]
    })
  }
  openDialog() {
    const dialogRef = this.dialog.open(TermsComponent);

    this.subcription = dialogRef.afterClosed().subscribe(result => {
      this.check = result
    });
  }
  ngOnDestroy() {
    this.subcription?.unsubscribe()
  }
  onRegister() {
    console.log(this.formData.status)
    let data: UserSubscriber = this.formData.value;
    if (this.formData.status == "VALID") {
      data.senha == data.repSenha ?
        this.saveData(data)
        :
        this.openSnackBar('Suas senhas não conferem', 'OK!')

    }
  }
  openSnackBar(message: string, action: string, time: number = 5000) {
    this._snackBar.open(message, action, { duration: time });
  }
  saveData(data: UserSubscriber) {
    this.api.sendUser(data).subscribe(
      success => { this.route.navigate(['login']) },
      error => { console.log(error) },
      () => { this.openSnackBar('Usuário criado com sucesso!', "OK!") }
    )
  }
}
