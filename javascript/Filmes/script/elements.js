function menuadd(){
    section.innerHTML = '<div id="adicionar"><span id="main"><button id="closeadd">X</button></span><span><label class="labelform">Nome do Filme:</label><input type="text" id="filme" class="inpform"><label class="labelform">Ano:</label><input type="text" id="year" class="inpform"><label class="labelform">Gênero:</label><input type="text" id="gen" class="inpform"><label class="labelform">Duração:</label><input type="text" id="dur" class="inpform"><label class="labelform">Óscar:</label><input type="text" id="osc" class="inpform"><span id="btns"><button id="cancel" class="buttons"> Cancelar</button><button id="send" class="buttons">Salvar</button></span></span></div>'

    menuaddestiliza()
}

function vizualizer(){
    /* Botão de excluir mais de um item */
    excluiritens.style.borderWidth="2px"
    excluiritens.style.borderColor="rgb(255,56,21)"
    excluiritens.style.borderStyle="solid"
    excluiritens.style.margin="40px"
    excluiritens.style.display="none"
    excluiritens.style.justifyContent="center"
    excluiritens.style.alignItems="center"
    excluiritens.style.fontSize="40px"
    excluiritens.style.width="50px"
    excluiritens.style.height="40px"
    excluiritens.style.backgroundColor="tomato"
    excluiritens.style.padding="5px"
    excluiritens.style.color="white"
}
function list(){
}

function menuaddestiliza(){
    /* Espaço do botao add */ 
    let espaco = document.getElementById("main")
    
    espaco.style.display="flex"
    espaco.style.alignItems="flex-end"

    /* botão de salvar */
    let btnsend = document.getElementsByClassName("buttons")[1]
    let btncancel = document.getElementsByClassName("buttons")[0] 
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

    //falta o hover

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
    fechaadd.style.boxShadow="indianred 1px 2px 1px 1px;"
    fechaadd.style.width="20%"
    fechaadd.style.height="30px"
    //falta o hover

    /* caixa do menu adicionar */
    
    let adicionar = document.getElementById("adicionar")
    
    adicionar.style.borderStyle="solid"
    adicionar.style.borderWidth="1px"
    adicionar.style.borderColor="tomato"
    adicionar.style.boxSizing="border-box"
    adicionar.style.padding="20px"

    // Caixa do botões
    let btnsadd = document.getElementById("btns")
    btnsadd.style.width="100%"
    btnsadd.style.display="flex"
    btnsadd.style.flexDirection="row"
    btnsadd.style.justifyContent="space-between"
}
