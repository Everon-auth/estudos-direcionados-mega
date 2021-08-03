import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: Http,) { }

  ngOnInit() {
/*     this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),
    }); */

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      })
    });
  }

  onSubmit(){
    console.log(this.formulario.value)
  
    this.http.post('https://httpbin.org/post',JSON.stringify(this.formulario.value))
    .map(res => res)
    .subscribe(dados => {
      console.log(dados);
      this.resetar();
    },
    (erro)=> console.error(erro));


  }

  resetar(){
    this.formulario.reset()
  }

}
