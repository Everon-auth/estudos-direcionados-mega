import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EstadoBR } from '../shared/models/estado-br.model';
import { DropdownService } from '../shared/services/dropdown.service';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;
  estados: Observable<EstadoBR[]>;
  cargos: any[];
  tecnologias: any[];
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdown: DropdownService,
    private consultacep: ConsultaCepService,
    ) { }

  ngOnInit() {

    this.estados = this.dropdown.getEstadosBR();
    this.cargos = this.dropdown.getCargos();
    this.tecnologias = this.dropdown.getTecnologias();
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
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, Validators.minLength(9)]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      }),
      cargo: [null],
      tecnologias: [null],
    });
  }

  onSubmit(){

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

  resetar(){
    this.formulario.reset()
  }

  consultar(){
    this.consultacep.consultaCEP(this.formulario)
  }

  verificaValidacoes(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(campo =>{
      console.log(campo)
      const controle = formGroup.get(campo)
      controle.markAsDirty();
      if(controle instanceof FormGroup) this.verificaValidacoes(controle)
    })
  }
  setCargo(){
    const cargo ={ nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' }
    this.formulario.get('cargo').setValue(cargo)

  }
  compararCargos(obj1,obj2){

    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2
  }

  compararTecnologias(){

  }
  settecnologia(){
    this.formulario.get('tecnologias').setValue(['Java','Javascript','PHP'])
    console.log(this.formulario.get('tecnologias').value)
  }
}