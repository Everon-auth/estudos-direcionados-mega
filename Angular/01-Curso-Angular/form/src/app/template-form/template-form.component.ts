import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: 'everton',
    email: 'evertonauth@gmail.com',
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  verificaValidTouched(campo){
    return !campo.valid && campo.touched;
  }

  onSubmit(form){
    console.log(form.value)
    this.http.post('https://httpbin.org/post',JSON.stringify(form.value))
    .subscribe();
  }
  consultaCEP(CEP,form){
    CEP = CEP.replace(/\D/g, '');

    if(CEP != ""){
      var validacep= /^[0-9]{8}$/;
      if(validacep.test(CEP)){
        this.resetaDadosForm(form);
/////////////////////////////////////////////////////////////////////////
        this.http.get(`https://viacep.com.br/ws/${CEP}/json`)
        .subscribe(dados => this.populaDadosForm(dados,form))
      }
    }
  }
  populaDadosForm(dados,formulario){
/*     form.setValue({
      nome: form.value.nome,
      email: form.value.email,
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      }
    }) */
    formulario.form.patchValue({
     endereco: {
       rua: dados.logradouro,
       complemento: dados.complemento,
       bairro: dados.bairro,
       cidade: dados.localidade,
       estado: dados.uf,
     }
    })
  }


  resetaDadosForm(formulario){
    formulario.form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    })
  }
}
