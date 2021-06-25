var add = document.getElementById("add");
var filmes = document.getElementById("btn-filmes");
var padd = document.getElementById("padd");
var section = document.getElementsByTagName("SECTION")[0]
var eliminar = document.getElementById("remove");
var excluiritens = document.getElementById("remove")
excluiritens.style.display="none"

var tela = 0;

section.innerHTML=""

add.addEventListener("click", function(){ 
   
   if(tela==0){
        menuadd()
        var closeadd = document.getElementById("closeadd");
        excluiritens.style.display="none"
    }
    closeadd.addEventListener("click",function(){
        section.innerHTML=''

    })
    var send = document.getElementById("send")
    send.addEventListener("click", function(){
        

        if(filme.value!="" && year.value !="" && gen.value!="" && dur.value!="" && osc.value!=""){
        savedb();
        section.innerHTML=""
    }else{
        if(filme.value == ""){
            console.log(filme.value)
            filme.style.borderColor="red"
        }
        if(year.value == ""){
            console.log(year.value)
            year.style.borderColor="red"
        }
        if(gen.value == ""){
            console.log(gen.value)
            gen.style.borderColor="red"
        }
        if(dur.value == ""){
            console.log(dur.value)
            dur.style.borderColor="red"
        }
        if(osc.value == ""){
            console.log(osc.value)
            osc.style.borderColor="red"
        }
    }
    })
})
filmes.addEventListener("click", function(){
    section.innerHTML=""
    
    getdb()

    vizualizer()

    var dado = JSON.parse(localStorage.getItem("filmes"));
    var database = Object.values(dado)
    eliminar.style.display="flex"

    for (let a = 0; a < database.length; a++) {
        var excl = document.getElementById(a)

        excl.addEventListener("click", function(){

            /* Evento de click exclusão única */


        })
        
    }

    for (let d = database.length; d == 1; d--) {
        /* Evento de clique de abrir a vizualização */
        var vizualizar = document.getElementById("vi"+d)
        
        vizualizar.addEventListener("click", function(){
        section.innerHTML=""

        

    })
    }
    eliminar.addEventListener("click",function(){
    
        var dado = JSON.parse(localStorage.getItem("filmes"));
        var database = Object.values(dado)
        
        for (let d = 0; d < database.length; d++) {
            
            var checkbox = document.getElementById("ch"+d)

            if(checkbox.checked == true){
                for (let e = 0; e < database.length; e++) {
                    const element = array[e];
                    
                }
            }
            
        }
    
    })      
    
})



