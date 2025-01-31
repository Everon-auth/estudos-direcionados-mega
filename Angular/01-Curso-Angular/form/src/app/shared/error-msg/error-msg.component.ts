import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormValidations } from '../services/form-validations';
import { DataFormComponent } from '../../data-form/data-form.component'
@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {

  @Input() msgErro: string;
  @Input() mostrarErro: boolean;
  @Input() label: string;
  @Input() control: FormControl;
  dataForm: DataFormComponent
  constructor() { }

  ngOnInit() {
    this. errorMessage
  }
  get errorMessage(){
    for(const propertyName in this.control.errors){
      if(this.control.errors.hasOwnProperty(propertyName) && this.control.touched){
        return FormValidations.getErrorMsg(this.label,propertyName, this.control.errors[propertyName])
      }
    }
    return null
  }
}
