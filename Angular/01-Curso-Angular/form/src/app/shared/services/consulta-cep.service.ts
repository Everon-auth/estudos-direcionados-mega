import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ConsultaCepService {

  constructor(private http: HttpClient) { }


  consultaCEP(form, CEP = null){
    if(CEP == null) {
      CEP = form.get('endereco.cep').value;
    }
    if(CEP !== null){
      CEP = CEP.replace(/\D/g, '');

      var validacep= /^[0-9]{8}$/;
      if(validacep.test(CEP)){
        this.resetaDadosForm(form);

        this.http.get(`https://viacep.com.br/ws/${CEP}/json`)
        .subscribe(dados => this.populaDadosForm(form,dados))
      }
    }
  }

  resetaDadosForm(form){
    form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    })
  }
  populaDadosForm(form,dados){
    form.patchValue({
      endereco: {
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf, 
      }
    })
    console.log(dados)
  }
}
