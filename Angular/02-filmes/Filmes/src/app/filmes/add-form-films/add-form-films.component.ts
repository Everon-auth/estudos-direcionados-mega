import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';
import { Films } from 'src/app/shared/models/films';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-add-form-films',
  templateUrl: './add-form-films.component.html',
  styleUrls: ['./add-form-films.component.scss']
})
export class AddFormFilmsComponent implements OnInit {
  URL_API:string = 'http://localhost:3000'
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
      nome: [null,[Validators.required,Validators.minLength(3)]],
      url: [null, [Validators.required,Validators.minLength(7)]],
      date: [null,Validators.required],
      descript: [null, Validators.required],
      type: [null, Validators.required]
    })
  }
  onSend(){
    this.http.addData(this.preparData(this.profileForm),this.URL_API)
  }
  preparData(values:Films){
    let data
    return data ={
      name: values.name,
      url: values.url,
      date: values.date,
      descript: values.descript,
      type: values.type
    }
  }
}
