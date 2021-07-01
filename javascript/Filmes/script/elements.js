function elements(pai,type,value,estilo,ID,color){
    const _type = type
    const _value = value
    const _ID = ID
    const _pai = pai
    let _estilo = estilo
    let cretateElement = () => {
        _pai.appendChild(document.createElement(_type)).setAttribute("id", _ID)
        if(_value!=""){
            document.getElementById(_ID).innerText=value
        }
    }
    let styleElement = () => {
        const _element = document.getElementById(_ID)
        
        key = Object.keys(_estilo)
        let i =0
        key.forEach(keys => {
            /*
            Usado o [] entre style para definir que ele não procure nos elementos proprios dele
            mas sim do meu array definido*/
            _element.style[key[i]]=_estilo[keys]
            i++        
        });
        _element.style.backgroundColor=color

    }
    //Cria o elemento passado por parâmetros
    cretateElement()
    //se não for definido o estilo do elemento criado, ignora a estilização
    if(_estilo != undefined){
    styleElement()
    }
}