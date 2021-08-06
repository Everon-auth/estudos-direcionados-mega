import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<div></div>',
})
export abstract class BaseFormComponent implements OnInit {

  formulario: FormGroup

  constructor() { }

  ngOnInit() {

  }

  abstract submit();

  onSubmit(){
    if(this.formulario.valid){
      this.submit();
    }else{
      console.log('formulário inválido');
    }
  }
  resetar(){
    this.formulario.reset()
  }
  verificaValidacoes(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(campo =>{
      console.log(campo)
      const controle = formGroup.get(campo)
      controle.markAsDirty();
      if(controle instanceof FormGroup) this.verificaValidacoes(controle)
    })
  }
  
  compararCargos(obj1,obj2){

    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2
  }
}
