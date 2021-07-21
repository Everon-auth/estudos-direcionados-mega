import { Add } from "./viewAdd.js";
import { description } from "./viewDescription.js";
import { viewEdit } from "./viewEdit.js"
import { viewLista } from "./viewList.js";
import { data } from "../config.js";


export function Controll (){

    
    const dados = data.readData()
    const menuAdd = new Add()
    const menuEdit = new viewEdit()
    const vizualizarLista = new viewLista()
    const vizualizarfilme = new description()

    window.addEventListener('click',function(e){
        const alvo=e.target.getAttribute('id')
        console.log(alvo)

        switch(alvo){
            case'btn-filmes':
            vizualizarLista.closeWindow()
            vizualizarLista.showBtns()
                for(let i = 0; i < dados.length; i++ ){
                    vizualizarLista.showWindow(dados[i].nome,dados[i].ID)
                }
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
        }
    }) 
   
    


/*     
    

/*      if(dados.length>0){
         



    }  
    
        data.saveData({
        nome: 'A menina e o porquinho',
        genero:'120',
        data:'06/02/2021',
        dur:'2h,30min',
        osc:'não',
        descricao:'descrito',
        url:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKEA012hh9aw1RMI7VSpvSWVITnhiOgKQt4qoiVvDcrp04CIvt',
        ID:data.createID(),
    })
    
 
    vizualizarfilme.showWindow(dados[0])
    
    vizualizarfilme.closeWindow()
    
   
    */



}