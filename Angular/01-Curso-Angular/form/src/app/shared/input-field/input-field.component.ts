import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFieldComponent),
  multi : true

};

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR],
})
export class InputFieldComponent implements ControlValueAccessor {

  @Input() id:string;
  @Input() label:string;
  @Input() type = 'text'
  @Input() control;
  @Input() isReadOnly = false;

  constructor() {}

  onChangeCB: (_:any) => void =() =>{}
  onTouchCB: (_:any) => void =() =>{}
  
  private innerValue:any;

  get value(){
    return this.innerValue;
  }
  set value(v:any){
     if(v !== this.innerValue){
       this.innerValue = v
       this.onChangeCB(v)
     }
  }

  writeValue(v: any): void {
    this.value = v
  }
  registerOnChange(fn: any): void {
    this.onChangeCB = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouchCB(fn)
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;    
  }


}
