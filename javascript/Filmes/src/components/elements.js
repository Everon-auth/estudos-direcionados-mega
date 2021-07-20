export function elements(pai,type,value,ID){
    let cretateElement = () => {
        pai.appendChild(document.createElement(type)).setAttribute("id", ID)
        if(value!=""){
            document.getElementById(ID).innerText=value
        }
    }
    let styleElement = (estilo) => {

        key = Object.keys(estilo)
        key.forEach((keys,i) => {
            /*
            Usado o [] entre style para definir que ele não procure nos elementos proprios dele
            mas sim do meu array definido*/
            _element.style[key[i]]=estilo[keys]        
        });
    }
    //Cria o elemento passado por parâmetros
    cretateElement()
    //seletor do elemento.
    const _element = document.getElementById(ID)
    
    return{
        setcolor : (cor) =>{
            _element.style.backgroundColor=cor
        },
        setStyle : (estilo) =>{
            styleElement(estilo)
        },
        giveAtrr : (atributo,valor) =>{
            _element.setAttribute(atributo,valor)
        },
        selectElement : () =>{
            return _element
        }
    }

}
