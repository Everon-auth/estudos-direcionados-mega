import { Buttons,icone,inputs,labels,shadowBox,windowadd,textarea, spanbts} from "./style.js"
import { elements } from "./elements.js"

export function components (pai){

    const buttonAdd = function(id,valor = 'confirmar'){
        const btn = new elements(pai,'Button',valor,id)
        btn.giveAtrr('data-set','add')
        btn.setStyle(Buttons)
    }
    const buttonClose = function (){
        const btn = new elements(pai,'Button','Cancelar')
        btn.giveAtrr('data-set','close')
        btn.setStyle(Buttons)
        btn.setcolor("red")
    }
    const shadow = function(){
        const shad = new elements(pai,'div','')
        shad.setStyle(shadowBox)
        shad.giveAtrr('id','shadow')
    }
    const WindowAdd = function(){
        const wind = new elements(pai,'span','')
        wind.setStyle(windowadd)
        wind.giveAtrr('id','addWindow')
    }
    const labelAdd = function(father,valor,id){
        const label = new elements(father,'label',valor)
        label.setStyle(labels)
        label.giveAtrr('id',id)
    }
    const inputAdd = function(valor,id){
        const input = new elements(pai,'input',valor,id)
        input.setStyle(inputs)
        input.classAdd('inpAnim')
    }
    const inputBox = function(valor,id){
        const input = new elements(pai,'textarea',valor,id)
        input.setStyle(inputs)
        input.setStyle(textarea)
    }
    const icones = function(src,data){
        const icon = new elements(pai,'img','')
        icon.setStyle(icone)
        icon.giveAtrr('src',src)
        icon.giveAtrr('data-id',data)
    }
    const checkbox = function(data){
        const check = new elements(pai,'checkbox')
        check.giveAtrr('data-id', data)
        /* check.setStyle() */
    }
    const list = function(){
        const li = new elements(pai,'span','')
        li.setStyle()
    }
    const hrs = function(){
        const hr = new elements(pai,'hr')
        hr.setStyle()
    }
    const output = function(valor){
        const out = new elements(pai,'output',valor)
        out.setStyle()
    }
    const labelList = function(valor){
        const label = new elements(pai,'label',valor)   
    }
    const spans = function(id){
        const span = new elements(pai,'span','',id)
        span.setStyle(spanbts)
    }

    return{
        span:(id)=>spans(id),
        btnadd:(id)=> buttonAdd(id),
        btnclose:(id)=>buttonClose(id),
        BoxShadow:()=> shadow(),
        windA:()=> WindowAdd(),
        labelA:(fd,valor,id)=>labelAdd(fd,valor,id),
        inpAdd:(valor,id)=>inputAdd(valor,id),
        inpbox:(valor,id)=>inputBox(valor,id),
        icon:()=> icones(),
        check:()=>checkbox(),
    }
}