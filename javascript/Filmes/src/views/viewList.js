import { components } from "../components/components.js";
import { section, btns } from "../config.js";


export function viewLista(){

    const window = function(dado,i){   
        const lista = new components(section)
        lista.lista(`li${i}`)

        const spanlist = document.querySelector(`#li${i}`)

        const elements = new components(spanlist)
        elements.check(`${i}`)
        elements.labelsLi('Filme:',`lb${i}`)
        elements.out(dado,`fm${i}`)
        elements.FawSpace(`el${i}`)
        
        const ico = new components(document.querySelector(`#el${i}`))
        
        ico.iconAwesome(`ed${i}`,"fa-edit")
        ico.iconAwesome(`ey${i}`,"fa-eye")
        ico.iconAwesome(`tr${i}`,"fa-trash")
        lista.hr(`h${i}`)

    }
    const buttonsLista= function(){
        const elem = new components(btns)
        elem.btnadd('add','Adicionar Filme')
        elem.btnclose('exc','Excluir Filmes')
    }
    const clean = function(){
        btns.innerHTML=''
        section.innerHTML=''
    }
    return{
        showWindow:(dado,index)=> window(dado,index),
        showBtns:()=>buttonsLista(),
        closeWindow:()=>clean()
    }
}