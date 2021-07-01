const btns = document.getElementsByClassName("spanbtns")[0]
const session = document.getElementsByTagName("SECTION")[0]
let i = true
function showHome (){
    session.innerHTML=""
    btns.innerHTML=""
    i=true
}
function showFilms (){
    session.innerHTML=""
    if(i){
        new elements(btns,"BUTTON","+",Buttons,"btnAdd","#0386dd")
        new elements(btns,"BUTTON","X",Buttons,"btnRemove","red")
        new events("click",document.getElementById("btnAdd"),addFilms)

        let i = 0
        let data = new database ("filmes",false)
        data.readData().forEach(key => {
            console.log(key)
            new elements(session,"SPAN","","","MAIN"+i)
            const pai = document.getElementById("MAIN"+i)
            new elements(pai,label,"Nome do Filme:",labels)
            i++
        })

    }
    i=false

}
function addFilms(){

    session.style.alignItems="center"
    
    let lbvalues = ["Nome do filme:", "Ano:", "Gênero:","Duração:","Descrição:"]
    let inpID = ["NF","YF","GF","DurF","DescF"]
    let lbID = ["NDF","An","Gn","Dur","Desc"]

    new elements(session,"SPAN","",windowadd,"menuAdd")
    const menuAdd = document.getElementById("menuAdd")
    new elements(menuAdd,"SPAN","",spanright,"btnadd")
    const btnadd = document.getElementById("btnadd")
    new elements(btnadd,"Button","X",Buttons,"close","red")
    
    let i = 0

    lbvalues.forEach(value =>{
        new elements(menuAdd,"label",value,labels,lbID[i])
        new elements(menuAdd,"INPUT","",inputs,inpID[i])
        i++
    })

    new elements(menuAdd,"SPAN","",spanright,"offbtnadd")
    const offadd = document.getElementById("offbtnadd")
    new elements(offadd,"Button","Add",Buttons,"add","#0386dd")

    new events("click",document.getElementById("close"),showFilms)
    new events("click",document.getElementById("add"),PrepairingData)

}
function PrepairingData(){

    let _ID
    let data = new database ("filmes",false)

    let genID = () => {
        _ID = Math.ceil(Math.random()*10000000)
    }

    genID()

    data.saveData({
        ID : _ID,
        Filme : document.getElementById("NF").value,
        Genero : document.getElementById("YF").value,
        Ano : document.getElementById("GF").value,
        duracao : document.getElementById("DurF").value,
        descricao : document.getElementById("Desc").value,
    })
    showFilms()
}
