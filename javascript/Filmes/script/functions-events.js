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
    btns.innerHTML=""
    if(i){
        new elements(btns,"BUTTON","+",Buttons,"btnAdd","#0386dd")
        new elements(btns,"BUTTON","X",Buttons,"btnRemove","red")
        new events("click",document.getElementById("btnAdd"),createWindow(struct,structID,structValue,structStyle,session,true,windowadd,false,document.getElementById("btnAdd")))

        let i = 0
        let data = new database ("filmes",false)
       data.readData().forEach(key => {
            new elements(session,"SPAN","","","MAIN"+i)
            const pai = document.getElementById("MAIN"+i)
        new elements(pai,"input","","","ch"+i,"","checkbox")
            
            new elements(pai,"label","Nome do Filme:",labels,"lb"+i)
            new elements(pai,"output",key["Filme"],"","ou"+i)
            i++
        })
    }
    i=false
    i=true

} 
function createWindow(struct,structID,structValue,structStyle,father,window,windowStyle,active = true,btn){

    let createForm = () =>{
        if(struct.length == structID.length){
            i = 0
            struct.forEach(types => {
            
                if(types != "button"){
                    new elements(father,types,structValue[i],structStyle[i],structID[i])
                }else{
                    new elements(father,"SPAN","",spanright,"p-btn-"+i,)
                    const bPai = document.getElementById("p-btn-"+i)
                    new elements(bPai,types,structValue[i],structStyle[i],structID[i])
                }
            i++                
            });
        }else{
            alert(`A structID e a struct não tem o mesmo tamanho.
            structID = `+ structID.length+`
            struct = `+ struct.length)
        }
        
    }
    let createWindow = () =>{
        if(window){
            new elements(father,"Span","",windowStyle,"Form")
            father = document.getElementById("Form")
        }
    }
    let cleanFather = () => {
        father.innerHTML=""
    }
    let y = 0
    if(btn!= undefined){
    btn.addEventListener("click", ()=>{
        if(y==0){
            cleanFather()
            createWindow()
            createForm()
            new events("click",document.getElementById("Add"),PrepairingData)
            new events("click",document.getElementById("close"),showFilms)
            y++
        }

    })}
    if(active){
    cleanFather()
    createWindow()
    createForm()
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
