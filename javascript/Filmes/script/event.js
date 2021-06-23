var add = document.getElementById("add");
var filmes = document.getElementById("btn-filmes");
var main = document.getElementsByTagName("main");
var padd = document.getElementById("padd");
var section = document.getElementsByTagName("SECTION")[0]
var tela = 0;



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
        savedb();
    })
})
filmes.addEventListener("click", function(){

})