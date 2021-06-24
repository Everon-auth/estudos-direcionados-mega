var add = document.getElementById("add");
var filmes = document.getElementById("btn-filmes");
var padd = document.getElementById("padd");
var section = document.getElementsByTagName("SECTION")[0]
var tela = 0;

section.innerHTML=""

add.addEventListener("click", function(){ 
   
   if(tela==0){
        menuadd()
        var closeadd = document.getElementById("closeadd");
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
/*
    for (let a = 1; a < localStorage.length+1; a++) {
        var imgs = document.getElementById(a)
    
        imgs.addEventListener("click", function(){
            localStorage.removeItem(a)
        })
        
    }
    */
})

