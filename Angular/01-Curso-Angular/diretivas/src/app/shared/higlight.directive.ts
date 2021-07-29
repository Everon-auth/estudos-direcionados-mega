import { Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHiglight]'
})
export class HiglightDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.background = this.higlightColor;
    };
  @HostListener('mouseleave') onMouseOut(){
    this.background=this.defaultColor;
  };
  
  @HostBinding('style.backgroundColor') background:string


 @Input() defaultColor:string;
 /*
  Angular consegue entender que a diretiva e o input tem o mesmo nome e que são coisas diferentes, diminuindo assim o tamanho do código dentro do componente
  @Input() higlightColor:string; 
 */
 @Input('appHiglight') higlightColor:string;

  constructor() { }

  ngOnInit(){
    this.background = this.defaultColor
  }

}

