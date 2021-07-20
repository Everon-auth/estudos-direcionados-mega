import { components } from "../components/components.js"

export function viewEdit(){
    const window = function(){

        const shadow = new components(body)
        shadow.BoxShadow()
    
        const addWindow = new components(document.querySelector('#shadow'))
        addWindow.windA()
        
        const selectorAddWindow = document.querySelector('#addWindow')
        
        labelText.forEach((value,i)=> {
    
            const labels = new components()
            labels.labelA(selectorAddWindow,value,i)
            if(i<=4){
                const inputs = new components(selectorAddWindow)
                inputs.inpAdd('',value)
            }else{
                const inputs = new components(selectorAddWindow)
                inputs.inpbox('',value)
            }
        })
        const span = new components(selectorAddWindow)
        span.span('btns')
    
        const spanBtns = document.querySelector('#btns')
        
        const btn = new components(spanBtns)
        btn.btnadd('Adicionar')
        btn.btnclose('fechar')
        }
}