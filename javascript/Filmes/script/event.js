var add = document.getElementById("add");
var filmes = document.getElementById("btn-filmes");
var padd = document.getElementById("padd");
var section = document.getElementsByTagName("SECTION")[0]
var eliminar = document.getElementById("remove");
var excluiritens = document.getElementById("remove")
excluiritens.style.display="none"

var tela = 0;

//Função de vizualizar os filmes em lista
filmes.addEventListener("click", function listaview(){
    section.innerHTML=""
    add.style.display="flex"
    getdb()

    vizualizer()

    var dado = JSON.parse(localStorage.getItem("filmes"));
    var database = Object.values(dado)
    eliminar.style.display="flex"
    // laço responsável por excluir um elemento clicando na lixeira
    for (let a = 0; a < database.length; a++) {
        var excl = document.getElementById(a)
        //cria o evento de click
        excl.addEventListener("click", function(){
            //remove o que é para ser excluido
            database.splice(a,1)
            //Converte
            dado = JSON.stringify(database)
            //Envia para o db
            localStorage.setItem("filmes", dado)
            //recarrega a vizualização
            listaview()

        })
        
    }

    //Laço responsável pela vizualização dos filmes
    for (let g = 0; g < database.length; g++) {
        //recupera o elemento pelo ID
        const viewer = document.getElementById("vi"+g)

        //cria o Evento de click
        viewer.addEventListener("click", function(){

        var view = database[g]
        //chama a função de criar os elementos e exibir os seus valores
        filmview(view, g)
            //armazena o elemento do botão de voltar
        let back = document.getElementById("back")      
        //Evento click de voltar
        back.addEventListener("click", function(){
            
            //chama a função de exibição por lista
            listaview()
        })
        })
        
    }
    
    //Eliminar mais de um por vez
    eliminar.addEventListener("click",function(){
    
        //recupera os dados para sí
        var dado = JSON.parse(localStorage.getItem("filmes"));
        //Converte
        var database = Object.values(dado)
        // Laço responsável por vizualizar quais checkbox foram marcadas
        for (let d =  database.length-1; d >=0 ; d--) {

            //armazena o valor de armazenamento dos checkbox
            var checkbox = document.getElementsByTagName("input")[d]
            //se o checkbox estiver marcado, exclui e faz a atualização no banco de dados
            if(checkbox.checked == true){
                // separa o dado a ser excluido
                database.splice(d,1)
                //converte
                dado = JSON.stringify(database)
                //Envia para o DB
                localStorage.setItem("filmes", dado)
            }
            
        }
        //chama a função de vizualizar em lista
        listaview()
    
    })
    // Laço responsável pela edição
    for (let x = 0; x < database.length; x++) {
        // Armazena o valor do elemento
        let edit = document.getElementById("ed"+x)
        //Inicia o evento de click
        edit.addEventListener("click", function(){
            // recupera os dados
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
            cancela.style.cursor="pointer"
            
            // Evento de cancelar o Envio da alteração
            cancela.addEventListener("click",function(){
                listaview()
            })


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
            confirma.style.cursor="pointer"
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
            
            //Labels do Editar
            nome.style.display="flex"
            nome.style.margin="5px"
            ano.style.display="flex"
            ano.style.margin="5px"
            genero.style.display="flex"
            genero.style.margin="5px"
            dur.style.display="flex"
            dur.style.margin="5px"
            osc.style.display="flex"
            osc.style.margin="5px"

            //Inputs do Editar
            inp.style.borderWidth=" 0px 0px 1px 0px"
            inp.style.width="60%"
            Anp.style.borderWidth=" 0px 0px 1px 0px"
            Anp.style.width="60%"
            Gnv.style.borderWidth=" 0px 0px 1px 0px"
            Gnv.style.width="60%"
            Onv.style.borderWidth=" 0px 0px 1px 0px"
            Onv.style.width="60%"
            Dnv.style.borderWidth=" 0px 0px 1px 0px"
            Dnv.style.width="60%"

            // elemento de confirmar a edição
            let confirm = document.getElementById("Confirmar")
            //Evento de confirmar a Edição
            confirm.addEventListener("click", function(){

                // Recupera os valores para serem editados no db
                let inp = document.getElementById("Fnv").value
                let Anv = document.getElementById("Anv").value
                let Gnv = document.getElementById("Gnv").value
                let Dnv = document.getElementById("Dnv").value
                let Onv = document.getElementById("Onv").value
                
                // Armazena os dados no local correto
                dado[x] = {
                    "filme": inp,
                    "ano":Anv,
                    "genero":Gnv,
                    "duração":Dnv,
                    "oscar":Onv
                }
                // converte
                dado = JSON.stringify(dado)
                //envia
                localStorage.setItem("filmes",dado)
                //Chama a função de exibir em lista
                listaview()
            })


        })
       
        
    }

    

    // Função de adiconar outro filme na lista
    add.addEventListener("click", function(){ 
        // se a tela atual for qualquer uma menos a de adiconar executa a seguinte função
        if(tela==0){
            //Cria o formulário de adicionar
             menuadd()
             var closeadd = document.getElementById("closeadd");
             excluiritens.style.display="none"
         }
         //Fecha o menu add
         closeadd.addEventListener("click",function(){
            listaview()
            dialogview()
         })
         //Fecha o menu add
         document.getElementById("cancel").addEventListener("click",function(){
             listaview()
            dialogview()
         })
         var send = document.getElementById("send")
         //Evento de enviar os dados 
         send.addEventListener("click", function(){
             
             // Se não houver algum campo vazio, ele envia os dados, se não, marca a borda do campo vazio com vermelho
             if(filme.value!="" && year.value !="" && gen.value!="" && dur.value!="" && osc.value!=""){
             savedb();
             listaview();
             let dialog = document.querySelector("#warning")
             if(dialog != null){
                 dialog.remove()
             }
         }else{

            dialog()
         }
         })
     })


})

document.querySelector("#btn-home").addEventListener("click", function(){
    section.innerHTML=""
    excluiritens.style.display="none"
    add.style.display="none"
})