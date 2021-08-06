import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators'

import { EstadoBR } from '../shared/models/estado-br.model';
import { DropdownService } from '../shared/services/dropdown.service';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { EMPTY } from 'rxjs';
import { FormValidations } from '../shared/services/form-validations';
import { VerificaEmailService } from '../shared/services/verifica-email.service';
import { BaseFormComponent } from '../shared/base-form/base-form.component';
import { Cidade } from '../shared/models/cidade';


@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent extends BaseFormComponent implements OnInit {


  /* formulario: FormGroup; */
  estados: /* Observable */EstadoBR[];
  cidades: Cidade[]
  cargos: any[];
  tecnologias: any[];
  newsletter: any[];
  frameworks: any[] = ['Angular', 'React', 'Vue', 'Sencha'];
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdown: DropdownService,
    private consultacep: ConsultaCepService,
    private verificaEmail: VerificaEmailService,
    ) {
      super();
    }

  ngOnInit() {

    this.verificaEmail.verificarEmail('').subscribe();

   // this.estados = this.dropdown.getEstadosBR();
    this.dropdown.getEstadosBR()
    .subscribe(dados => this.estados = dados)
    this.cargos = this.dropdown.getCargos();
    this.tecnologias = this.dropdown.getTecnologias();
    this.newsletter = this.dropdown.getNewsletter();
    /*
      this.dropdown.getEstadosBR()
      .subscribe(dados => this.estados = dados); */
    /* .subscribe(dados => {
        this.estados = dados
        console.log(this.estados)
      }) 
    */
/*     this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),
    }); */

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required,Validators.minLength(3), Validators.maxLength(5)]],
      email: [null, [Validators.required, Validators.email]],
      confirmarEmail: [null, [FormValidations.equalsTo('email')], this.validarEmail.bind(this)],
      
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required,FormValidations.cepValidator]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      }),
      cargo: [null],
      tecnologias: [null],
      newsletter: ['s'],
      termos: [null,Validators.pattern('true')],
      framework: this.buildFramework(),
    });

    this.formulario.get('endereco.cep').statusChanges.pipe(
      distinctUntilChanged(),
      tap(value => console.log(`Valor do CEP: ${value}`)))
      .subscribe(status =>{
      if(status == 'VALID') this.consultacep.consultaCEP(this.formulario)
    })

    this.formulario.get('endereco.estado').valueChanges.pipe(
      tap(estado => console.log(`Novo estado ${estado}`),
      map(estado => this.estados.filter(e => e.id == estado),
      map(estados => estados && estados.length > 0 ? estados[0].id : EMPTY))),
      switchMap((estadoID:number) => this.dropdown.getCidades(estadoID))).
      subscribe((cidades) => this.cidades = cidades);

    /* this.dropdown.getCidades(23).subscribe(console.log) */
  }

  consultar(){
    this.consultacep.consultaCEP(this.formulario)
  }


  setCargo(){
    const cargo ={ nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' }
    this.formulario.get('cargo').setValue(cargo)

  }


  compararTecnologias(){

  }
  settecnologia(){
    this.formulario.get('tecnologias').setValue(['Java','Javascript','PHP'])
    console.log(this.formulario.get('tecnologias').value)
  }
  buildFramework(){
    const value = this.frameworks.map( (v) => new FormControl(false));
    return this.formBuilder.array(value, this.reqiredMinCheckbox(1))
    /*
    const value = this.frameworks.map( (v) => new FormControl(false));
    return this.formBuilder.array(value);
    */

  }
  reqiredMinCheckbox(min = 1){
    const validator = (formArray: FormArray) =>{
/*       const totalChecked = FormArray.controls;
    }
    return validator */
    const totalChecked = formArray.controls
    .map(v => v.value)
    .reduce((total,current)=> current ? total + current : total, 0);
    return totalChecked >= min ? null : { required: true }  
  };
  return validator;
  }

  validarEmail(formControl: FormControl){
    return this.verificaEmail.verificarEmail(formControl.value)
    .pipe(map(emailExistente => emailExistente ? { emailInvalido: true } : null));
  }

  submit() {
    if(this.formulario.valid){
      this.http.post('https://httpbin.org/post',JSON.stringify(this.formulario.value))
      .subscribe(dados => {
        console.log(dados);
        this.resetar();
      },
      (erro)=> console.error(erro));  
    }else{
      console.log('formulario inválido')
      this.verificaValidacoes(this.formulario)
    }
  }
}