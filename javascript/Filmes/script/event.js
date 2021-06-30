function events (type,element,funct){
    const _type = type
    const _element = element

    let _createEvent = () => {
        _element.addEventListener(_type, ()=>{
        })
    }
    _createEvent()
}
