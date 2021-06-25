function menuadd(){
    section.innerHTML = '<div id="adicionar"><span id="main">'+
    '<button id="closeadd">X</button> </span>'+
    '<span><label class="labelform">Nome do Filme:</label>'+
    '<input type"text" id="filme" class="inpform">'+
    '<label class="labelform">Ano:</label>'+
    '<input type"text" id="year" class="inpform">'+
    '<label class="labelform">Gênero:</label>'+
    '<input type"text" id="gen" class="inpform">'+
    '<label class="labelform">Duração:</label>'+
    '<input type"text" id="dur" class="inpform">'+
    '<label class="labelform">Óscar:</label>'+
    '<input type"text" id="osc" class="inpform">'+
    '<button id="send">Salvar</button>'
    '</span></div>'

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
    espaco.style.backgroundColor="#efefef"

    /* botão de salvar */
    let btnsend = document.getElementById("send")

    btnsend.style.marginTop="10px"
    btnsend.style.borderRadius="7px"
    btnsend.style.backgroundColor="rgb(125,180,43)"
    btnsend.style.boxSizing="border-box"
    btnsend.style.padding="20px"
    //falta o hover

    /* Botão de fechar */
    let fechaadd = document.getElementById("closeadd")

    fechaadd.style.fontSize="22px"
    fechaadd.style.backgroundColor="none"
    fechaadd.style.fontWeight="bolder"
    fechaadd.style.border="none"
    fechaadd.style.alignItems="center"
    fechaadd.style.display="flex"
    fechaadd.style.justifyContent="center"
    fechaadd.style.width="35px"
    fechaadd.style.height="35px"
    //falta o hover

    /* caixa do menu adicionar */
    
    let adicionar = document.getElementById("adicionar")
    
    adicionar.style.borderStyle="solid"
    adicionar.style.borderWidth="1px"
    adicionar.style.borderColor="tomato"
    adicionar.style.boxSizing="border-box"
    adicionar.style.padding="20px"


}
