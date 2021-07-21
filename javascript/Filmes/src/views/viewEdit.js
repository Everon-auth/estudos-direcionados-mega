import { components } from "../components/components.js"
import { labelText,inpIDs,body } from "../config.js"

export function viewEdit(){
    const window = function(data){

        const shadow = new components(body)
        shadow.BoxShadow()
    
        const addWindow = new components(document.querySelector('#shadow'))
        addWindow.windA()
        
        const selectorAddWindow = document.querySelector('#addWindow')

        const key = Object.keys(data)
        console.log()
        labelText.forEach((value,i)=> {
            const labels = new components()
            labels.labelA(selectorAddWindow,value,i)
                
                if(i<=4){
                    const inputs = new components(selectorAddWindow)
                    inputs.inpAdd(data[key[i]],inpIDs[i])
                }else{
                    const inputs = new components(selectorAddWindow)
                    inputs.inpbox(data[key[i]],inpIDs[i])
                }
        })
        const span = new components(selectorAddWindow)
        span.span('btns')
    
        const spanBtns = document.querySelector('#btns')
        
        const btn = new components(spanBtns)
        btn.btnadd('Adicionar')
        btn.btnclose('fechar')
    }
    return{
        viewEd:(dados)=> window(dados),

    }
}