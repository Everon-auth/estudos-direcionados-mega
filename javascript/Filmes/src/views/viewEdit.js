import { components } from "../components/components.js"
import { labelText,inpIDs,body } from "../config.js"

export function viewEdit(){
let dados
    const window = function(date){
        dados = date
        console.log(dados['ID'])
        let constructor = new components(body)
        constructor.BoxShadow()
        constructor.windA()
        console.log(date['ID'])
        const selectorAddWindow = document.querySelector('#addWindow')

        const key = Object.keys(date)
        labelText.forEach((value,i)=> {
             constructor = new components()
            constructor.labelA(selectorAddWindow,value,i)
                
                if(i<=5){
                    constructor = new components(selectorAddWindow)
                    constructor.inpAdd(date[key[i]],inpIDs[i])
                }else{
                    constructor = new components(selectorAddWindow)
                    constructor.inpbox(date[key[i]],inpIDs[i])
                }
        })
        constructor = new components(selectorAddWindow)
        constructor.span('btns')
    
        const spanBtns = document.querySelector('#btns')
        
        constructor= new components(spanBtns)
        constructor.btnadd('editar')
        constructor.btnclose('fechar')
    }
    const clear = function(){
        const shadow = document.querySelector('#shadow')
        console.log(shadow)
        const add = document.querySelector('#addWindow')
        document.body.removeChild(shadow)
        document.body.removeChild(add)
    }
    const dataNew = function(){
        let _dados={
            nome: document.querySelector('#nome').value,
            genero: document.querySelector('#gen').value,
            data: document.querySelector('#data').value,
            dur: document.querySelector('#dur').value,
            osc: document.querySelector('#osc').value,
            url: document.querySelector('#url').value,
            descricao: document.querySelector('#descript').value,
            ID:dados['ID']
        }
        return _dados 
    }
    return{
        showWindow:(dados)=> window(dados),
        closeWindow:()=> clear(),
        getEditData:()=> dataNew(),

    }
}