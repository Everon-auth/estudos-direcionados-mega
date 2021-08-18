import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-add-form-films',
  templateUrl: './add-form-films.component.html',
  styleUrls: ['./add-form-films.component.scss']
})
export class AddFormFilmsComponent implements OnInit, OnDestroy {
  URL_API: string = 'http://localhost:3000'
  profileForm: any
  subscriber!: Subscription
  selectDirectives: any[] = ['Filme', 'Série']

  directiveStats: boolean = false;

  isError: boolean = false
  ErrorDialog: any
  isUploaded: boolean = false

  constructor(
    private http: CrudService,
    private fb: FormBuilder,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      img: [null],
      date: [null, Validators.required],
      descript: [null, Validators.required],
      type: [null, Validators.required]
    })
    this.directiveStats = true


  }
  onSend() {
    if (this.profileForm.status != "INVALID") {
      this.subscriber = this.http.addData(this.preparData(this.profileForm), `${this.URL_API}/films`).subscribe()
      this.route.navigate(["/films"])
    } else {
      this.isError = true
      this.ErrorDialog = `Alguns campos estão Inválidos, favor preencher todos corretamentes.`
    }
  }
  preparData(values: any) {
    let data
    return data = {
      name: values.value.name,
      img: values.value.url,
      date: values.value.date,
      descript: values.value.descript,
      type: values.value.type
    }
  }
  ngOnDestroy() {
    this.subscriber?.unsubscribe()
  }
  catchEvent(event: any) {
    this.isError = event.value
  }
}
