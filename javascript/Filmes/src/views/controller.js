import { data } from "../config.js";
import { Add } from "./viewAdd.js";
import { description } from "./viewDescription.js";
import { viewEdit } from "./viewEdit.js"
import { viewLista } from "./viewList.js";


export function Controll (){
    let dados = data.readData()
    const menuAdd = new Add()
    const menuEdit = new viewEdit()
    const vizualizarLista = new viewLista()
    const vizualizarfilme = new description()

    const reload = ()=>{
        dados = data.readData()
        vizualizarLista.closeWindow()
        vizualizarlist()
    }

    const vizualizarlist = ()=>{
        for(let i = 0; i < dados.length; i++ ){
            vizualizarLista.showWindow(dados[i].nome,dados[i].ID)
        }
        vizualizarLista.showBtns()
    }
    const checkMod = (boxes)=>{
        let checked = []
        for(var entry of boxes.entries()) {
            if(entry[1].checked){
                checked.push(entry[1].id)
            }
        }
        checked.forEach(id=> data.saveData(data.catchDate(id),true))
    }
   
    
    window.addEventListener('click',function(e){
        const alvo_id=e.target.getAttribute('id')
        const alvo_data = e.target.getAttribute('data-id')
        switch(alvo_id){
            case'btn-filmes':
            vizualizarLista.closeWindow()
            vizualizarlist()
            break
            case 'btn-home':
                vizualizarLista.closeWindow()
            break
            case 'add':
                vizualizarLista.closeWindow()
                menuAdd.showWindow()
            break
            case 'shadow':
                menuAdd.closeWindow()
            break
            case 'fechar':
                menuAdd.closeWindow()
                reload()
            break
            case 'Adicionar':
                data.saveData(menuAdd.getDataAdd())
                menuAdd.closeWindow()
                reload()
            break
            case `tr${alvo_data}`:
                data.saveData(data.catchDate(alvo_data),true)
                reload()
            break
            case`ed${alvo_data}`:
                reload()
                menuEdit.showWindow(data.catchDate(alvo_data))
            break
            case `ey${alvo_data}`:
                vizualizarLista.closeWindow()
                vizualizarfilme.showWindow(data.catchDate(alvo_data))
            break
            case 'voltar':
                reload()    
            break
            case 'exc':
                const boxes = document.querySelectorAll('input[type="checkbox"]')
                checkMod(boxes)
                reload()
            break
            case'editar':
                data.saveData(menuEdit.getEditData())
                menuEdit.closeWindow()
                reload()
            break
        }
    })
}