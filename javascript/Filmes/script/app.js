//mesma coisa que o windows.onload
(()=>{
//
    const filmes = document.getElementById("btn-filmes")
    const home = document.getElementById("btn-home")
    
    btnfilme = new events("click",filmes,showFilms)
    btnhome = new events("click",home,showHome)


})()
//dados do meu form de adicionar um filme
struct = ["button",
    "Label",
    "Input",
    "Label",
    "Input",
    "Label",
    "Input",
    "Label",
    "Input",
    "Label",
    "Input",
    "button"]
structID = ["1",
    "2",
    "NF",
    "4",
    "YF",
    "6" ,
    "GF" ,
    "8",
    "DurF",
    "10",
    "Desc",
    "12"]        
structValue = ["X",
    "Nome do filme:",
    "",
     "Ano:",
    "",
     "Gênero:",
    "",
    "Duração:",
    "",
    "Descrição:",
    "",
    "Add"]
structStyle = [Buttons,
    labels,
    inputs,
    labels,
    inputs,
    labels,
    inputs,
    labels,
    inputs,
    labels,
    inputs,
    Buttons]