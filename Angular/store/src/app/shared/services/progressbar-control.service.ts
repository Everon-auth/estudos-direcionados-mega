import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressbarControlService {
  
  public progress_car:boolean = false

  constructor() { }
}
