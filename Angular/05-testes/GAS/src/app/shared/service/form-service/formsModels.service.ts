import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsModelsService {

  constructor() { }

  formLogin() {
    return [
      {
        label: "Email",
        placeholder: "Ex. joaosinho@dominio.com",
        valor: "",
        tipo: "text",
        erro: [
          {}
        ]
      }, {
        label: "senha",
        placeholder: "",
        valor: "",
        tipo: "password",
        erro: [
          {}
        ]
      }
    ]
  }

}
