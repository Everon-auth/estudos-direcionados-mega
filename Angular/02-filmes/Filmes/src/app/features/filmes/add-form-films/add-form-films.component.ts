import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { CrudService } from 'src/app/shared/services/crud.service';
import { UploadServiceService } from 'src/app/shared/services/upload-service.service';
import { environment } from 'src/environments/environment';
// import { filterResponse, uploadProgress } from '../../../shared/models/rxjs.operators'
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

  files: Set<File> = new Set();
  progress: number = 0

  constructor(
    private http: CrudService,
    private fb: FormBuilder,
    private route: Router,
    private upload: UploadServiceService
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
      this.progress = 0;
      console.log(this.files)
      if (this.files)
        if (this.files && this.files.size > 0) {
          this.upload.upload(this.files, `${environment.BASE_URL}/upload`)
            .subscribe(success => {
              this.isUploaded = true
            },
              error => {
                console.log(error)
              },
              () => this.route.navigate(['/films'])
            )
        }

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
  onChange(event: any) {
    const selectedFiles = <FileList>event.srcElement.files
    for (let i = 0; i < selectedFiles.length; i++) {
      if (selectedFiles[i].type == "image/jpeg" || selectedFiles[i].type == "image/png" || selectedFiles[i].type == "image/jpg") {
        this.files.add(selectedFiles[i])
      }
    }
    if (!this.files.size) {
      const erromsg = `Arquivos incompátiveis, favor colocar apênas arquivos com formato PNG, JPG ou JPEG`
      this.isError = true
      this.ErrorDialog = erromsg
      throw new Error(erromsg)
    }
  }
}
