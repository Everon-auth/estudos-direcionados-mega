import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CepService } from 'src/app/shared/services/cep.service';

@Component({
  selector: 'app-new-adress',
  templateUrl: './new-adress.component.html',
  styleUrls: ['./new-adress.component.scss']
})
export class NewAdressComponent implements OnInit {

  formController:any
  constructor(
    private cep : CepService,
    private formbuild:FormBuilder
    ) { }

  ngOnInit(): void {
    this.formController = this.formbuild.group({
      cep: null,
      n:null,
      uf:null,
      cidade:null,
      ref: null,
    })
  }
  onChangeCEP(){
    console.log(this.formController.value)
  }
}
