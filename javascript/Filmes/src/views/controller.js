import { Add } from "./viewAdd.js";
import { viewEdit } from "./viewEdit.js"
import { viewLista } from "./viewList.js";

export function Controll (){
    const menuAdd = new Add()

    const menuEdit = new viewEdit()

    const vizualizarLista = new viewLista()
    window.addEventListener('click',function(e){
        e.preventDefault()
        console.log(e.target)
    })
}