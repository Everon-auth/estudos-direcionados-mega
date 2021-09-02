import { Component, OnInit } from '@angular/core';
import { FormsModelsService } from 'src/app/shared/service/form-service/formsModels.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  form: any;

  constructor(
    private formInputs: FormsModelsService,
  ) { }

  ngOnInit(): void {
    this.form = this.formInputs.formLogin()
    console.log(this.form)
  }

}
