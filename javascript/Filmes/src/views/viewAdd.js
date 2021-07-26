import { components } from "../components/components.js"
import { labelText,inpIDs,body, data } from "../config.js"

export function Add (){

    const window = function(){
        let  constructor = new components(body)
        constructor.BoxShadow()

        constructor.windA()
        
        const selectorAddWindow = document.querySelector('#addWindow')
        
        labelText.forEach((value,i)=> {

            constructor = new components()
            constructor.labelA(selectorAddWindow,value,i)
            if(i <= labelText.length-2){
                constructor = new components(selectorAddWindow)
                constructor.inpAdd('',inpIDs[i])
            }else{
                constructor = new components(selectorAddWindow)
                constructor.inpbox('',inpIDs[i])
            }
        })
        constructor = new components(selectorAddWindow)
        constructor.span('btns')

        const spanBtns = document.querySelector('#btns')
        
        constructor = new components(spanBtns)
        constructor.btnadd('Adicionar')
        constructor.btnclose('fechar')
    }

    const close = function(){
        const shadow = document.querySelector('#shadow')
        console.log(shadow)
        const add = document.querySelector('#addWindow')
        document.body.removeChild(shadow)
        document.body.removeChild(add)

    }
    const dados = function(){
        let _dados={
            nome: document.querySelector('#nome').value,
            genero: document.querySelector('#gen').value,
            data: document.querySelector('#data').value,
            dur: document.querySelector('#dur').value,
            osc: document.querySelector('#osc').value,
            url: document.querySelector('#url').value,
            descricao: document.querySelector('#descript').value,
            ID:data.createID(),
        }
        return _dados 
    }

    return{
        showWindow:()=>window(),
        closeWindow:()=>close(),
        getDataAdd:()=>dados()
    }
}