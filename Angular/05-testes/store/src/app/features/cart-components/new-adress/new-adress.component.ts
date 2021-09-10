import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { CepService } from 'src/app/shared/services/cep.service';
import { ComprasService } from 'src/app/shared/services/compras.service';


@Component({
  selector: 'app-new-adress',
  templateUrl: './new-adress.component.html',
  styleUrls: ['./new-adress.component.scss']
})
export class NewAdressComponent implements OnInit, OnDestroy {
  formController: any
  subscriber!: Subscription

  @Output() evt = new EventEmitter

  constructor(
    private cep: CepService,
    private formbuild: FormBuilder,
    private warning: MatSnackBar,
    private saveService: ComprasService,

  ) { }

  ngOnInit(): void {
    this.formController = this.formbuild.group({
      cep: [null, [Validators.required, Validators.minLength(8)]],
      n: [null, Validators.required],
      uf: [null, Validators.required],
      cidade: [null, Validators.required],
      ref: null,
      apto: null,
      nomeEnd: [null, Validators.required],
      bairro: [null, Validators.required]
    });
  }
  onChangeCEP() {
    let data: any;

    if (this.formController.controls.cep.status == "VALID") {
      this.subscriber = this.cep.getCEP(this.formController.value.cep).subscribe(
        success => data = success,
        error => { throw new Error(`Houve um erro ao localizar o seu CEP, tente novamente mais tarde. ERRO: ${error}`) },
        () => this.popularDados(data, this.formController)
      )
    } else {
      this.warning.open('CEP inválido', 'ok!')
    }
  }
  popularDados(data: any, form: FormControl) {
    form.patchValue({
      uf: data.uf,
      cidade: data.localidade,
      ref: data.logradouro,
      bairro: data.bairro,
    })
  }
  onCancel() {
    this.evt.emit({ value: true })
  }
  ngOnDestroy() {
    this.subscriber?.unsubscribe()
  }
  onSend() {
    if (this.formController.status == "VALID") {

      const form = this.formController.value

      let data: any = {
        cep: form.cep,
        cidade: form.cidade,
        estado: form.uf,
        referencia: form.ref,
        numero: form.n,
        nome: form.nomeEnd,
        bairro: form.bairro,
        apto: form.apto
      }

      this.saveService.newEnd(data).subscribe(
        success => this.warning.open("Endereço salvo com sucesso!", "Perfeito!"),
        error => this.warning.open("Houve um erro ao adicionar seu endereço, favor tentar novamente", 'OK!'),
        () => this.onCancel()
      )
    }
  }
}
