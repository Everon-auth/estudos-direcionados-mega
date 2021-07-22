import { components } from "../components/components.js"
import { labelText,inpIDs,body, data } from "../config.js"

export function Add (){

    const window = function(){
        const bcom = new components(body)
        bcom.BoxShadow()

        bcom.windA()
        
        const selectorAddWindow = document.querySelector('#addWindow')
        
        labelText.forEach((value,i)=> {

            const labels = new components()
            labels.labelA(selectorAddWindow,value,i)
            if(i <=labelText.length-2){
                const inputs = new components(selectorAddWindow)
                inputs.inpAdd('',inpIDs[i])
            }else{
                const inputs = new components(selectorAddWindow)
                inputs.inpbox('',inpIDs[i])
            }
        })
        const span = new components(selectorAddWindow)
        span.span('btns')

        const spanBtns = document.querySelector('#btns')
        
        const btn = new components(spanBtns)
        btn.btnadd('Adicionar')
        btn.btnclose('fechar')
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