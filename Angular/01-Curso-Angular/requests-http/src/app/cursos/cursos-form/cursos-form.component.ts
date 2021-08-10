import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  form: FormGroup;
  submitted: boolean = false
  curso: any
  constructor(
    private fb: FormBuilder,
    private cursoData: CursosService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
/* 
    this.curso = this.route.params.pipe(
      map((params: any) => params['id']),
      switchMap(id => this.cursoData.loadByID(id))
    ).subscribe(curso => this.updateForm(curso))
 */
    const curso = this.route.snapshot.data['curso'];
    this.form = this.fb.group({
      id: [curso.id],
      nome: [curso.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    })
  }
/*   updateForm(curso){
    this.form.patchValue({
      nome: curso.nome,
      id: curso.id
    })
  } */
  hasError(field: string) {
    return this.form.get(field).errors
  }


  onSubmit() {

    this.submitted = true
    if (this.form.valid) {
      console.log(`Nome válido: ${this.form.value.nome}`);

      this.cursoData.save(this.form.value).subscribe(
        success =>{ alert(` Requisição feita com sucesso `)},
        error => { alert(` Houve um erro inesperado, tente novamente `)},
        () => this.router.navigate([''])
      )
    }

  }

  onCancel() {
    this.submitted = false;
    this.form.reset()
  }
}
