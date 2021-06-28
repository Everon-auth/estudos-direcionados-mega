var add = document.getElementById("add");
var filmes = document.getElementById("btn-filmes");
var padd = document.getElementById("padd");
var section = document.getElementsByTagName("SECTION")[0]
var eliminar = document.getElementById("remove");
var excluiritens = document.getElementById("remove")
excluiritens.style.display="none"

var tela = 0;



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

            filme.style.borderColor="red"
        }
        if(year.value == ""){
            
            year.style.borderColor="red"
        }
        if(gen.value == ""){
            
            gen.style.borderColor="red"
        }
        if(dur.value == ""){
            
            dur.style.borderColor="red"
        }
        if(osc.value == ""){
            
            osc.style.borderColor="red"
        }
    }
    })
})
filmes.addEventListener("click", function listaview(){
    section.innerHTML=""
    
    getdb()

    vizualizer()

    var dado = JSON.parse(localStorage.getItem("filmes"));
    var database = Object.values(dado)
    eliminar.style.display="flex"

    for (let a = 0; a < database.length; a++) {
        var excl = document.getElementById(a)

        excl.addEventListener("click", function(){

            database.splice(a,1)
            dado = JSON.stringify(database)
            localStorage.setItem("filmes", dado)

            listaview()

        })
        
    }


    for (let g = 0; g < database.length; g++) {
        const viewer = document.getElementById("vi"+g)
        viewer.addEventListener("click", function(){
        var view = database[g]
        filmview(view, g)
        let back = document.getElementById("back")      
        back.addEventListener("click", function(){
            listaview()
        })
        })
        
    }

    eliminar.addEventListener("click",function(){
    
        var dado = JSON.parse(localStorage.getItem("filmes"));
        var database = Object.values(dado)
        
        for (let d =  database.length-1; d >=0 ; d--) {

            
            var checkbox = document.getElementsByTagName("input")[d]
            if(checkbox.checked == true){


                database.splice(d,1)
                dado = JSON.stringify(database)
                localStorage.setItem("filmes", dado)
                
            }
            
        }
        listaview()
    
    })
    for (let x = 0; x < database.length; x++) {
        
        let edit = document.getElementById("ed"+x)
        
        edit.addEventListener("click", function(){

            var dado = JSON.parse(localStorage.getItem("filmes"));
            var database = Object.values(dado)

            //zera o section
            section.innerText=""

            //Cria o formulário de edição de filme

            section.appendChild(document.createElement("span")).setAttribute("id","editing")
            //cria uma caixa de edição
            let editing = document.getElementById("editing")
            editing.appendChild(document.createElement("span")).setAttribute("id", "nome")
            let nome = document.getElementById("nome")
            //Cria o elemento label e o input para edição
            nome.appendChild(document.createElement("label")).setAttribute("id","lbn")
            nome.appendChild(document.createElement("input")).setAttribute("id","Fnv")
            // define os valores dos elementos criados
            let lbn = document.getElementById("lbn")
            lbn.setAttribute("class","labels")
            lbn.innerText="Nome do filme:"
            
            let inp = document.getElementById("Fnv")
            inp.value=database[x]["filme"]

            //cria uma caixa de edição

            editing.appendChild(document.createElement("span")).setAttribute("id", "ano")
            let ano = document.getElementById("ano")
            //Cria o elemento label e o input para edição
            ano.appendChild(document.createElement("label")).setAttribute("id","lba")
            ano.appendChild(document.createElement("input")).setAttribute("id","Anv")
            // define os valores dos elementos criados
            let lba = document.getElementById("lba")
            lba.setAttribute("class","labels")
            lba.innerText="Ano:"
            
            let Anp = document.getElementById("Anv")
            Anp.value=database[x]["ano"]

            //cria uma caixa de edição

            editing.appendChild(document.createElement("span")).setAttribute("id", "genero")
            let genero = document.getElementById("genero")
            //Cria o elemento label e o input para edição
            genero.appendChild(document.createElement("label")).setAttribute("id","lbg")
            genero.appendChild(document.createElement("input")).setAttribute("id","Gnv")
            // define os valores dos elementos criados
            let lbg = document.getElementById("lbg")
            lbg.setAttribute("class","labels")
            lbg.innerText="Gênero:"
            
            let Gnv = document.getElementById("Gnv")
            Gnv.value=database[x]["genero"]

            //cria uma caixa de edição

            editing.appendChild(document.createElement("span")).setAttribute("id", "dur")
            let dur = document.getElementById("dur")
            //Cria o elemento label e o input para edição
            dur.appendChild(document.createElement("label")).setAttribute("id","lbd")
            dur.appendChild(document.createElement("input")).setAttribute("id","Dnv")
            // define os valores dos elementos criados
            let lbd = document.getElementById("lbd")
            lbd.setAttribute("class","labels")
            lbd.innerText="Duração:"
            
            let Dnv = document.getElementById("Dnv")
            Dnv.value=database[x]["duração"]

            //cria uma caixa de edição

            editing.appendChild(document.createElement("span")).setAttribute("id", "osc")
            let osc = document.getElementById("osc")
            //Cria o elemento label e o input para edição
            osc.appendChild(document.createElement("label")).setAttribute("id","lbo")
            osc.appendChild(document.createElement("input")).setAttribute("id","Onv")
            // define os valores dos elementos criados
            let lbo = document.getElementById("lbo")
            lbo.setAttribute("class","labels")
            lbo.innerText="Óscar:"
            
            let Onv = document.getElementById("Onv")
            Onv.value=database[x]["oscar"]

            editing.appendChild(document.createElement("span")).setAttribute("id", "btns")
            let btns = document.getElementById("btns")
            //Cria o elemento label e o input para edição
            btns.appendChild(document.createElement("button")).setAttribute("id","Cancelar")
            btns.appendChild(document.createElement("button")).setAttribute("id","Confirmar")
            let cancela = document.getElementById("Cancelar")
            let confirma = document.getElementById("Confirmar")
            //Span dos botões
            btns.style.display="flex"
            btns.style.flexDirection="row"
            btns.style.justifyContent="space-between"
            //botão cancelar
            cancela.innerText="Cancelar"
            cancela.style.backgroundColor="red"
            cancela.style.marginTop="10px"
            cancela.style.display="flex"
            cancela.style.alignItems="center"
            cancela.style.justifyContent="center"
            cancela.style.color="white"
            cancela.style.borderRadius="4px"
            cancela.style.border="none"
            cancela.style.boxShadow="indianred 1px 2px 1px 1px;"
            cancela.style.width="40%"
            cancela.style.height="30px"
            //botão confirmar
            confirma.innerText="Confirmar"
            confirma.style.marginTop="10px"
            confirma.style.borderRadius="4px"
            confirma.style.backgroundColor="#009AFF"
            confirma.style.boxSizing="border-box"
            confirma.style.display="flex"
            confirma.style.alignItems="center"
            confirma.style.justifyContent="center"
            confirma.style.width="40%"
            confirma.style.height="30px"
            confirma.style.border="none"
            confirma.style.boxShadow="steelblue 1px 2px 2px 1px"
            confirma.style.color="white"
            //section
            section.style.alignItems="center"
            //caixa de edição
            editing.style.display="flex"
            editing.style.flexDirection="column"
            editing.style.borderStyle="solid"
            editing.style.borderWidth="1px"
            editing.style.borderColor="gray"
            editing.style.padding="20px"
            editing.style.width="500px"
            editing.style.borderRadius="7px"
            editing.style.boxShadow="rgb(200,200,200) 1px 2px 1px 1px"


            



            let confirm = document.getElementById("Confirmar")

            confirm.addEventListener("click", function(){
                let inp = document.getElementById("Fnv").value
                let Anv = document.getElementById("Anv").value
                let Gnv = document.getElementById("Gnv").value
                let Dnv = document.getElementById("Dnv").value
                let Onv = document.getElementById("Onv").value
                dado[x] = {
                    "filme": inp,
                    "ano":Anv,
                    "genero":Gnv,
                    "duração":Dnv,
                    "oscar":Onv
                }
                dado = JSON.stringify(dado)
                localStorage.setItem("filmes",dado)
                listaview()
            })


        })
       
        
    }
})