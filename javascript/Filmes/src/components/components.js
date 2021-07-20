import "./style.js"
import { elements } from "./elements.js"

export function components (pai){

    const buttonAdd = function(){
        const btn = new elements(pai,'Button','+')
        btn.giveAtrr('data-set','add')
    }
    buttonAdd()
}