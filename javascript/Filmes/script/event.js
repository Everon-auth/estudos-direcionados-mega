function events (type,element,funct){
    const _type = type
    const _element = element

    let _createEvent = () => {
        element.addEventListener(type, ()=>{
            console.log("a")
        })
    } 

    _createEvent()
}
