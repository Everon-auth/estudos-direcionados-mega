import { Buttons,icone,inputs,labels,shadowBox,windowadd,textarea, spanbts, lista, spanIcons} from "./style.js"
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
        const check = new elements(pai,'input','',data)
        check.giveAtrr('type','checkbox')
        /* check.setStyle() */
    }
    const list = function(id){
        const li = new elements(pai,'span','',id)
        li.setStyle(lista)
    }
    const hrs = function(){
        const hr = new elements(pai,'hr','')
       /*  hr.setStyle() */
    }
    const output = function(valor,id){
        const out = new elements(pai,'output',valor,id)
        /* out.setStyle() */
    }
    const labelList = function(valor,id){
        const label = new elements(pai,'label',valor,id)   
    }
    const spans = function(id){
        const span = new elements(pai,'span','',id)
        span.setStyle(spanbts)
    }
    const Fawesome = function(id = 'a',icon){
        const el = new elements(pai,'i','',id)
        el.classAdd('fas')
        el.classAdd(icon)
    }
    const spanFaw = function(id){
        const el = new elements(pai,'span','',id)
        el.setStyle(spanIcons)
    }
 //<i class="fas fa-eye"></i>
    return{
        span:(id)=>spans(id),
        btnadd:(id)=> buttonAdd(id),
        btnclose:(id)=>buttonClose(id),
        BoxShadow:()=> shadow(),
        windA:()=> WindowAdd(),
        labelA:(fd,valor,id)=>labelAdd(fd,valor,id),
        inpAdd:(valor,id)=>inputAdd(valor,id),
        inpbox:(valor,id)=>inputBox(valor,id),
        icon:(src,data)=> icones(src,data),
        check:(data)=>checkbox(data),
        lista:(id)=>list(id),
        hr:()=>hrs(),
        labelsLi:(valor,id)=>labelList(valor,id),
        out:(valor,id)=> output(valor,id),
        iconAwesome:(id,icon)=>Fawesome(id,icon),
        FawSpace:(id)=>spanFaw(id)
    }
}