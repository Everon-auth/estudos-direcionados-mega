import { components } from "../components/components.js"
import { outpts, boxvi, bx, lbview } from "../components/style.js"
import { section } from "../config.js"

const labelText =['Nome do Filme:','Gênero:','Data de lançamento:','Duração:','Óscar:','Descrição:']

export function description(){
    
    const window = function(data){
        const key = Object.keys(data)
        let constructor
        section.style.flexDirection='column'
        section.style.alignItems='center'
            constructor = new components(section)
                constructor.createbox("view",boxvi)
        const backview = document.querySelector('#view')
            constructor = new components(backview)
                constructor.backBTN('voltar','<i class="fas fa-arrow-left"></i>')
            constructor = new components(section)
                constructor.cart("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKEA012hh9aw1RMI7VSpvSWVITnhiOgKQt4qoiVvDcrp04CIvt","cd")
                constructor.createbox('list',bx)
        const info = document.querySelector('#list')

                labelText.forEach((valor,i) =>{
                    constructor = new components(info)
                            constructor.labelA(info,valor,`lb${i}`,lbview)
                            constructor.out(data[key[i]],`ou${i}`,outpts)
                })
    }

    const close = function(){
        section.innerHTML=''
    }
    return{
        showWindow:(data)=> window(data),
        closeWindow:()=>close()
    }
}