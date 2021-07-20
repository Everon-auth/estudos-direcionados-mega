function events (type,element,funct){
    const _type = type
    const _element = element

    let _createEvent = () => {
        _element.addEventListener(_type,function(e){
          funct
        })
    }
    _createEvent()
    
    const evttarget = (selector,classelements,atribute) =>{
      document.querySelector(selector).addEventListener('click', function(e){
        console.log(e.target)
      
        if (e.target.classList.contains(classelements)) {
          e.preventDefault()
          return e.target.getAttribute(atribute)
        }
      })
    }
    return{
      target : (seletor,classe,atributo) =>{
        return evttarget(seletor,classe,atributo)
      }
    }
}

/* 
///////////////////////////////////////////////////////////////
                Evento delegado ao pai e o target localiza o click pelo node DOM criado
///////////////////////////////////////////////////////////////
    document.querySelector('.nav__links').addEventListener('click', function(e){
    console.log(e.target)
  
    if (e.target.classList.contains('nav__link')) {
      console.log('link')
      e.preventDefault()
      const id = e.target.getAttribute('href')
      document.querySelector(id).scrollIntoView({
      behavior: 'smooth'})
    }
  }) */
  

  
/* function evt(container,selection,atributo){
  let evtclicko = () =>{
    document.querySelector(container).addEventListener('click', function(e){
      console.log(e.target)

      if (e.target.classList.contains(selection)) {
        console.log('link')
        e.preventDefault()
        const id = e.target.getAttribute(atributo)
        console.log(document.querySelector(id))
        return document.querySelector(id)
      }
    })
  }

  const slider = (element) =>{
    element.scrollIntoView({behavior : 'smooth'})
  }

  let click = evtclicko()
  console.log(evtclicko())
  slider(click)

}
evt('.nav__links','.nav__link','href') */





/*
////////////////////////////////////////////////////////////////////////////////////
          Não usar as funções com parametros no addeventlistener direto
          chamar manualmente dentro da função criada no evento
          ---------------------------------------------------
          usar o bind para isso, ele corrigiu depois no video
                    bind só aceita um parametro
///////////////////////////////////////////////////////////////////////////////////
*/