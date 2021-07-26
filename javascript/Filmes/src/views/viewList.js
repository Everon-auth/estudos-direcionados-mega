import { components } from "../components/components.js";
import { section, btns } from "../config.js";


export function viewLista(){
    let constructor
    const window = function(dado,i){   
        constructor = new components(section)
        constructor.lista(`li${i}`)

        const spanlist = document.querySelector(`#li${i}`)

        constructor = new components(spanlist)
        constructor.check(`${i}`)
        constructor.labelsLi('Filme:',`lb${i}`)
        constructor.out(dado,`fm${i}`)
        constructor.FawSpace(`el${i}`)
        
        constructor = new components(document.querySelector(`#el${i}`))
        
        constructor.iconAwesome(`ed${i}`,i,'./assets/editing.png')
        constructor.iconAwesome(`ey${i}`,i,'./assets/eye.png')
        constructor.iconAwesome(`tr${i}`,i,'./assets/bin.png')
        constructor = new components(section)
        constructor.hr(`h${i}`)

    }
    const buttonsLista= function(){
        constructor = new components(btns)
        constructor.btnadd('add','Adicionar Filme')
        constructor.btnclose('exc','Excluir Filmes')
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