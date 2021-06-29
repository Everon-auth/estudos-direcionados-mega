function menuadd(){
    section.innerHTML = '<div id="adicionar"><span id="main"><button id="closeadd">X</button></span><span><label class="labelform">Nome do Filme:</label><input type="text" id="filme" class="inpform"><label class="labelform">Ano:</label><input type="text" id="year" class="inpform"><label class="labelform">Gênero:</label><input type="text" id="gen" class="inpform"><label class="labelform">Duração:</label><input type="text" id="dur" class="inpform"><label class="labelform">Óscar:</label><input type="text" id="osc" class="inpform"><span id="btns"><button id="cancel" class="buttons"> Cancelar</button><button id="send" class="buttons">Salvar</button></span></span></div>'
    section.style.alignItems="center"
    section.justifyContent="center"
    menuaddestiliza()
}

function vizualizer(){
    /* Botão de excluir mais de um item */
    excluiritens.style.marginRight="40px"
    excluiritens.style.marginBottom="20px"
    excluiritens.style.display="flex"
    excluiritens.style.alignContent="center"
    excluiritens.style.justifyContent="center"
    excluiritens.style.alignItems="center"
    excluiritens.style.fontSize="30px"
    excluiritens.style.width="60px"
    excluiritens.style.height="30px"
    excluiritens.style.backgroundColor="red"
    excluiritens.style.color="white"
    excluiritens.style.borderRadius="7px"
    excluiritens.style.boxShadow="#b70000 1px 2px 1px 1px"
    //se o mouse sair do botão, ele muda de cor
    excluiritens.addEventListener("mouseout", function(){
        excluiritens.style.transition="0.5s"
        excluiritens.style.backgroundColor="red"
    })
    //se o mouse entrar no botão, ele muda de cor
    excluiritens.addEventListener("mouseover", function(){
        excluiritens.style.transition="0.5s"
        excluiritens.style.backgroundColor="#b70000"
    })
}
function filmview(view){

    section.innerHTML=""
    section.style.alignItems="center"
    // criar os elementos de vizualização
    //caixa de vizualização
    let spanview= document.createElement("span")
    section.appendChild(spanview).setAttribute("id","view")
    
    let spanvews = document.getElementById("view")

    //estilização da caixa de vizualização:
    spanvews.style.width="800px"
    spanvews.style.display="flex"
    spanvews.style.flexDirection="column"
    spanvews.style.padding="60px"
    spanvews.style.borderStyle="solid"
    spanvews.style.borderWidth="1px"
    spanvews.style.borderColor="rgb(200,200,200)"
    spanvews.style.borderRadius="7px"
    spanvews.style.boxShadow=" gray 2px 1px 1px 1px"
    spanvews.style.height="350px"
    spanvews.style.boxSizing="border-box"

    //botão de voltar

    spanvews.appendChild(document.createElement("span")).setAttribute("id","backbutton")
    let spanback = document.getElementById("backbutton")
    spanback.appendChild(document.createElement("button")).setAttribute("id","back")
    let back = document.getElementById("back")
    //estilização do botão
    spanback.style.display="flex"
    spanback.style.flexDirection="row"
    spanback.style.alignItems="flex-start"
    back.innerText="Voltar"
    back.style.borderRadius="4px"
    back.style.backgroundColor="#009AFF"
    back.style.boxSizing="border-box"
    back.style.display="flex"
    back.style.alignItems="center"
    back.style.justifyContent="center"
    back.style.width="60px"
    back.style.height="30px"
    back.style.border="none"
    back.style.boxShadow="steelblue 1px 2px 2px 1px"
    back.style.color="white"



    // nome do filme 
    let title = document.createElement("H2")
    spanvews.appendChild(title).setAttribute("id","nomefilme")
    let titles = document.getElementById("nomefilme")
    titles.innerText=view["filme"]
    //estilização do nome do filme
    titles.style.display="flex"
    titles.style.flexDirection="column"
    titles.style.alignItems="center"
    
    //Elemento de ano:
    let spaceano = document.createElement("span")

    let ano = document.createElement("h4")

    spanvews.appendChild(spaceano).setAttribute("id","spanyear")
    let = spaceanos = document.getElementById("spanyear")
    spaceanos.appendChild(ano).setAttribute("id","anofilme")
    let anos = document.getElementById("anofilme")
    anos.innerText="Ano de lançamento:"

    let label= document.createElement("label")
    spaceanos.appendChild(label).setAttribute("id","year")
    let year = document.getElementById("year")
    year.innerText=view["ano"]
    //estilização do elemento ano:

    spaceanos.style.display="flex"
    spaceanos.style.justifyContent="flex-start"
    spaceanos.style.height="40px"
    spaceanos.style.flexDirection="row"
    spaceanos.style.alignItems="center"
    year.style.marginLeft="10px"

    //Elemento de Gênero:
    let spacegenero = document.createElement("span")
    let genero = document.createElement("h4")
    let lbgen = document.createElement("label")

    spanvews.appendChild(spacegenero).setAttribute("id","genfilme")
    let spacegen = document.getElementById("genfilme")
    spacegen.appendChild(genero).innerText="Gênero:"

    spacegen.appendChild(lbgen).setAttribute("id", "gen")
    let gener= document.getElementById("gen")
    gener.innerText=view["genero"]
    //estilização do elemento:
    spacegen.style.display="flex"
    spacegen.style.justifyContent="flex-start"
    spacegen.style.height="40px"
    spacegen.style.alignItems="center"
    gener.style.marginLeft="10px"

    // Elemento Duração:
    let spaceduracao = document.createElement("span")
    let dur = document.createElement("h4")
    let lbdur = document.createElement("label")

    spanvews.appendChild(spaceduracao).setAttribute("id", "durfilme")
    let spacedur = document.getElementById("durfilme")
    spacedur.appendChild(dur).innerText="Duração"

    spacedur.appendChild(lbdur).setAttribute("id", "dur")
    let duration = document.getElementById("dur")
    duration.innerText=view["genero"]
    //estilização do elemento:
    spacedur.style.display="flex"
    spacedur.style.justifyContent="flex-start"
    spacedur.style.height="40px"
    spacedur.style.alignItems="center"
    duration.style.marginLeft="10px"

    // Elemento óscar:

    let spaceoscar = document.createElement("span")
    let oscar = document.createElement("h4")
    let lbosc = document.createElement("label")

    spanvews.appendChild(spaceoscar).setAttribute("id","oscarfilme")
    let spaceosc = document.getElementById("oscarfilme")
    spaceosc.appendChild(oscar).innerText="Óscar:"

    spaceosc.appendChild(lbosc).setAttribute("id","oscar")
    let osc = document.getElementById("oscar")
    osc.innerText=view["oscar"]
    //estilização do elemento:
    spaceosc.style.display="flex"
    spaceosc.style.justifyContent="flex-start"
    spaceosc.style.height="40px"
    spaceosc.style.alignItems="center"
    osc.style.marginLeft="10px"
}

function menuaddestiliza(){
    /* Espaço do botao add */ 
    let espaco = document.getElementById("main")
    espaco.style.display="flex"
    espaco.style.alignItems="flex-end"

    /* botão de salvar */
    let btnsend =document.getElementById("send")
    let btncancel = document.getElementById("cancel") 
    btnsend.style.marginTop="10px"
    btnsend.style.borderRadius="4px"
    btnsend.style.backgroundColor="#009AFF"
    btnsend.style.boxSizing="border-box"
    btnsend.style.display="flex"
    btnsend.style.alignItems="center"
    btnsend.style.justifyContent="center"
    btnsend.style.width="40%"
    btnsend.style.height="30px"
    btnsend.style.border="none"
    btnsend.style.boxShadow="steelblue 1px 2px 2px 1px"
    btnsend.style.color="white"
    btnsend.style.cursor="pointer"

    btnsend.addEventListener("mouseover", function(){
        btnsend.style.transition="0.5s"
        btnsend.style.backgroundColor="#004777"
    })

    btnsend.addEventListener("mouseout", function(){
        btnsend.style.transition="0.5s"
        btnsend.style.backgroundColor="rgb(0, 154, 255)"
    })

    btncancel.style.marginTop="10px"
    btncancel.style.borderRadius="4px"
    btncancel.style.backgroundColor="#009AFF"
    btncancel.style.boxSizing="border-box"
    btncancel.style.display="flex"
    btncancel.style.alignItems="center"
    btncancel.style.justifyContent="center"
    btncancel.style.width="40%"
    btncancel.style.height="30px"
    btncancel.style.border="none"
    btncancel.style.boxShadow="steelblue 1px 2px 2px 1px"
    btncancel.style.color="white"
    btncancel.style.cursor="pointer"

    btncancel.addEventListener("mouseover", function(){
        btncancel.style.transition="0.5s"
        btncancel.style.backgroundColor="#004777"
    })

    btncancel.addEventListener("mouseout", function(){
        btncancel.style.transition="0.5s"
        btncancel.style.backgroundColor="rgb(0, 154, 255)"
    })

    /* Botão de fechar */
    let fechaadd = document.getElementById("closeadd")

    fechaadd.style.backgroundColor="red"
    fechaadd.style.marginTop="10px"
    fechaadd.style.display="flex"
    fechaadd.style.alignItems="center"
    fechaadd.style.justifyContent="center"
    fechaadd.style.color="white"
    fechaadd.style.borderRadius="4px"
    fechaadd.style.border="none"
    fechaadd.style.boxShadow="#9e0000 1px 2px 1px 1px"
    fechaadd.style.width="20%"
    fechaadd.style.height="30px"
    fechaadd.style.cursor="pointer"

    fechaadd.addEventListener("mouseover", function(){
        fechaadd.style.transition="0.5s"
        fechaadd.style.backgroundColor="#a20000"
    })

    fechaadd.addEventListener("mouseout", function(){
        fechaadd.style.transition="0.5s"
        fechaadd.style.backgroundColor="red"
    })
    
    // Caixa do botões
    let btnsadd = document.getElementById("btns")
    btnsadd.style.width="100%"
    btnsadd.style.display="flex"
    btnsadd.style.flexDirection="row"
    btnsadd.style.justifyContent="space-between"
    
}


function dialog(){
    //cria o dialog e seta o id dele
    document.body.appendChild(document.createElement("dialog")).setAttribute("id", "warning")
    //seletor do elemento
    var dialog = document.querySelector("#warning")
    dialog.setAttribute("open", "open")
    dialog.appendChild(document.createElement("span")).setAttribute("id","aviso")


    dialog.appendChild(document.createElement("H1")).setAttribute("id","close")
    
    let close = document.querySelector("#close")
    close.innerText="X"
    close.style.cursor="pointer"
    close.style.fontSize="30px"
    close.style.color="white"
    close.style.height="100%"
    close.style.width="50px"
    close.style.alignItems="center"
    close.style.display="flex"
    close.style.justifyContent="center"

    close.addEventListener("click", function(){
        dialog.remove()
    })

    dialog.style.marginRight="5px"
    dialog.style.marginTop="5px"
    dialog.style.float="right"
    dialog.style.width="200px"
    dialog.style.height="60px"
    dialog.style.border="none"
    dialog.style.borderRadius="7px"
    dialog.style.display="flex"
    dialog.style.alignItems="center"
    dialog.style.backgroundColor="#da0000"
    
    let aviso = document.getElementById("aviso")
    aviso.innerText="Favor preencher todos os campos"
    aviso.style.color="white"
    aviso.style.width="150px"
}
function dialogview(){
    let dialog = document.querySelector("#warning")
    if(dialog != null){
        dialog.remove()
    }
}