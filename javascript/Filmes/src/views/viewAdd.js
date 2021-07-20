import { components } from "../components/components.js"

const labelText =['Nome do Filme:','Gênero:','Data de lançamento:','Duração:','Óscar:','Descrição:']

const body = document.querySelector('body')

export function Add (){
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

    const close = function(){
        const conteudo = document.querySelector('#shadow')
        document.body.removeChild(conteudo)

    }

    return{
        showWindow:()=>window(),
        closeWindow:()=>close(),
    }
}