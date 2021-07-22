import { Buttons,icone,inputs,labels,shadowBox,windowadd,textarea, spanbts, lista, spanIcons, checkbx, lblist, outputs, fincons, back, carta} from "./style.js"
import { elements } from "./elements.js"

export function components (pai){

    let constructor

    const buttonAdd = function(id,valor = 'confirmar'){
        constructor= new elements(pai,'Button',valor,id)
        constructor.setStyle(Buttons)
    }
    const buttonClose = function (id,data = 'Cancelar'){
        constructor= new elements(pai,'Button',data,id)
        constructor.setStyle(Buttons)
        constructor.setcolor("red")
    }
    const shadow = function(){
        constructor = new elements(pai,'div','','shadow')
        constructor.setStyle(shadowBox)
    }
    const WindowAdd = function(){
        constructor= new elements(pai,'span','','addWindow')
        constructor.setStyle(windowadd)
    }
    const labelAdd = function(father,valor,id,style = labels){
        constructor = new elements(father,'label',valor,id)
        constructor.setStyle(style)
    }
    const inputAdd = function(valor,id){
        constructor = new elements(pai,'input',"",id)
        constructor.setStyle(inputs)
        constructor.giveAtrr('value', valor)
        constructor.classAdd('inpAnim')
    }
    const inputBox = function(valor,id){
        constructor= new elements(pai,'textarea',valor,id)
        constructor.setStyle(inputs)
        constructor.setStyle(textarea)
    }
    const cartaz = function(src,id,style = carta){
        constructor = new elements(pai,'img','',id)
        constructor.setStyle(style)
        constructor.giveAtrr('src',src)
    }
    const checkbox = function(data){
        constructor = new elements(pai,'input','',data)
        constructor.giveAtrr('type','checkbox')
        constructor.setStyle(checkbx)
    }
    const list = function(id){
        constructor = new elements(pai,'span','',id)
        constructor.setStyle(lista)
    }
    const hrs = function(id){
        constructor= new elements(pai,'hr','',id)
       /*  hr.setStyle() */
    }
    const output = function(valor,id,style = outputs){
        constructor = new elements(pai,'output',valor,id)
        constructor.setStyle(style)
    }
    const labelList = function(valor,id){
        constructor = new elements(pai,'label',valor,id)
        constructor.setStyle(lblist)   
    }
    const spans = function(id){
        constructor = new elements(pai,'span','',id)
        constructor.setStyle(spanbts)
    }
    const Fawesome = function(id,data,src){
        constructor = new elements(pai,'img','',id)
        constructor.setStyle(fincons)
        constructor.giveAtrr('data-id', data)
        constructor.giveAtrr('src', src)
    }
    const spanFaw = function(id){
        constructor = new elements(pai,'span','',id)
        constructor.setStyle(spanIcons)
    }
    const btnback = function(id,valor='<-'){
        constructor = new elements(pai,'Button',valor,id)
        constructor.setStyle(back)
    }
    const box = function(id,style){
        constructor = new elements(pai,'span','',id)
        constructor.setStyle(style)
    }
 //<i class="fas fa-eye"></i>
    return{
        span:(id)=>spans(id),
        btnadd:(id,data)=> buttonAdd(id,data),
        btnclose:(id,data)=>buttonClose(id,data),
        BoxShadow:()=> shadow(),
        windA:()=> WindowAdd(),
        labelA:(fd,valor,id,style)=>labelAdd(fd,valor,id,style),
        inpAdd:(valor,id)=>inputAdd(valor,id),
        inpbox:(valor,id)=>inputBox(valor,id),
        cart:(src,id,style)=> cartaz(src,id,style),
        check:(data)=>checkbox(data),
        lista:(id)=>list(id),
        hr:(id)=>hrs(id),
        labelsLi:(valor,id)=>labelList(valor,id),
        out:(valor,id,style)=> output(valor,id,style),
        iconAwesome:(id,data,src)=>Fawesome(id,data,src),
        FawSpace:(id,)=>spanFaw(id),
        backBTN:(id,valor)=> btnback(id,valor),
        createbox:(id,style)=> box(id,style)
    }
}