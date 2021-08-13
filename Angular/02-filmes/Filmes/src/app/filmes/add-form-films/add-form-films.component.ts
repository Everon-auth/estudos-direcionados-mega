import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Subscription } from 'rxjs';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-add-form-films',
  templateUrl: './add-form-films.component.html',
  styleUrls: ['./add-form-films.component.scss']
})
export class AddFormFilmsComponent implements OnInit {
  URL_API:string = 'http://localhost:3000/'
  profileForm: any
  subscriber!: Subscription
  formDirectives: any
  selectDirectives: any[] = ['Filme', 'Série']
  constructor(
    private http: CrudService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.subscriber = this.http.returnList(`${this.URL_API}/FormInputs`).subscribe(data => this.formDirectives = data)

    this.profileForm = this.fb.group({
      nome: [null],
      url: [null],
      date: [null],
      descript: [null],
      type: [null]
    })
  }
  onSend(){
    this.http.addData(this.preparData,this.URL_API)
  }
  preparData(){
    let data
    return data ={

    }
  }

}
