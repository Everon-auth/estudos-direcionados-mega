import { Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef,
    private _renderer: Renderer2) {
      
      //this._elementRef.nativeElement.style.backgroundColor="yellow"

      this._renderer.setStyle(
        this._elementRef.nativeElement,
        'background-color','yellow')
      
      
        //this._renderer.setElementStyle(this._elementRef.nativeElement,'background-color','yellow')
    }

}

////////////////////////////////////////
// Nota importante:
/* ElementRef não é a forma mais segura de se utilizar para modificar o dom, preferencia pelo Renderer que é mais seguro.*/
/* Usar sempre o Renderer 2 pois o Renderer está obsoleto (a funcionalidade é a mesma com algumas coisas a menos)*/