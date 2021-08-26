import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss']
})
export class LogInFormComponent implements OnInit {

  dataForm!:FormGroup
  hide = true;
  constructor(
    private formbuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.dataForm = this.formbuilder.group({
      user: [null,[Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    })
  }
  onSubmit(){
    console.log(this.dataForm.value)
  }
}
