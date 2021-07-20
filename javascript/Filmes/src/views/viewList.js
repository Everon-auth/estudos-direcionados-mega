import { components } from "../components/components.js";

const section = document.querySelector('section')

export function viewLista(){
    const lista = new components(section)
    lista.lista("li")

    const spanlist = document.querySelector('#li')

    const elements = new components(spanlist)
    elements.check('10')
    elements.labelsLi('Filme:','lb')
    elements.out('A menina e o porquinho','fm#1')
    elements.FawSpace('t')
    
    const ico = new components(document.querySelector('#t'))
    
    ico.iconAwesome('a',"fa-eye")
    ico.iconAwesome('b',"fa-edit")
    ico.iconAwesome('c',"fa-trash")

}