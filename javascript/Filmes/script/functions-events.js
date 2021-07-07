const btns = document.getElementsByClassName("spanbtns")[0]
const session = document.getElementsByTagName("SECTION")[0]
let i = true

function showHome (){
    session.innerHTML=""
    btns.innerHTML=""
}
function showFilms (){
    session.innerHTML=""
    session.style.alignItems="flex-start"
    btns.innerHTML=""

        new elements(btns,"BUTTON","+","btnAdd")
        new elements(btns,"BUTTON","X","btnRemove")
        
        new events("click",document.getElementById("btnAdd"),()=>{

            let addmenu = new createWindow()
            addmenu.createWind(session,"span","form",windowadd)
            const pai = addmenu.selectWind()
            addmenu.createfor(pai,struct,structID,structStyle,structValue)
        })
        

        
        let data = new database ("filmes",false)
       data.readData().forEach((key,i) => {
            
        new elements(session,"SPAN","","MAIN"+i)

            const pai = document.getElementById("MAIN"+i)

        let check = new elements(pai,"input","","ch"+i)
        check.giveAtrr("type","checkbox")

            new elements(pai,"label","Nome do Filme:","lb"+i)
            new elements(pai,"output",key["Filme"],"ou"+i)
        })
} 
function createWindow(){
let father
    let createForm = (father,struct,structID,structStyle,structValue) =>{
        if(struct.length == structID.length){
            struct.forEach((types,i) => {
            
                if(types != "button"){
                    let element = new elements(father,types,structValue[i],structID[i])
                    element.setStyle(structStyle[i])
                }else{
                    new elements(father,"SPAN","","p-btn-"+i)
                    const bPai = document.getElementById("p-btn-"+i)
                    let element = new elements(bPai,types,structValue[i],structID[i])
                    element.setStyle(structStyle[i])
                }
            });
        }else{
            alert(`A structID e a struct não tem o mesmo tamanho.
            structID = ${structID.length} 
            struct = ${struct.lenght}`)
        }
        
    }

    let createWindow = (pai,tipo,ID,estilo) =>{
        let elemento =new elements(pai,tipo,"",ID)
        elemento.setStyle(estilo)
        father = element.selectElement()
    }
    let cleanFather = (pai) => {
        pai.innerHTML=""
        pai.style.alignItems="center"
    }
    return{
        createWind : (pai,tipo,ID,estilo) =>{
            cleanFather(pai)
            createWindow(pai,tipo,ID,estilo)
        },
        createfor : (pais,estrutura,IDs,estilos,valores) =>{
            createForm(pais,estrutura,IDs,estilos,valores)
        },
        selectWind : () =>{
            return father
        }
    }
}
function PrepairingData(){

    let data = new database ("filmes",false)
    data.saveData({
        ID : data.createID(),
        Filme : document.getElementById("NF").value,
        Genero : document.getElementById("YF").value,
        Ano : document.getElementById("GF").value,
        duracao : document.getElementById("DurF").value,
        descricao : document.getElementById("Desc").value,
    })
    showFilms()
}
