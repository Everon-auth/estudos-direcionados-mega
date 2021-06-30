//mesma coisa que o windows.onload
(()=>{
//

const filmes = document.getElementById("btn-filmes")
const home = document.getElementById("btn-home")
    let Data = new database ("filmes",false)
    Data.readData()
//    Data.saveData({
//        ID:0,
//        Filme: "a culpa é das estrelas",
//        Genero : "Drama",
//        Ano : "2015",
//        Duracao : "2014"
//    })


    let Events = new events("click",filmes)
})()