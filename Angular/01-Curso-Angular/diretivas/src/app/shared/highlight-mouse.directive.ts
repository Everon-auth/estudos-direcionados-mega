import { Directive, HostListener, ElementRef, Renderer2, HostBinding} from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    // Refatorado com o HostBinding:
    
    // this._renderer.setStyle(this._elementRef.nativeElement,'background-color','yellow');
    
    // Refatoração:
    this.background = 'yellow'
    };
  @HostListener('mouseleave') onMouseOut(){

    // Refatorado com o HostBinding:

    //this._renderer.setStyle(this._elementRef.nativeElement,'background-color','white');

    // Refatoração:
    this.background='white'  
  };
  
  //@HostBinding('style.backgroundColor') background: string;
  
  @HostBinding('style.backgroundColor') get setColor(){
    
    /*
      Executar manipulações diversas se necessário para depois dar o retorno do valor para o hostBinding
      o get antes do setColor é para aguardar a modificação dentro desse setColor, quandou hover manipulação, ele escutará e retornara a atualização do valor para o HostBinding referido.
    */
    
    return this.background
  }

  private background: string;

  constructor(
    /* 
      Desnecessário assim que utilizado o HostListener:

      private _elementRef: ElementRef,
      private _renderer: Renderer2 
    */
  ) { }

}
