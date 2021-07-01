//mesma coisa que o windows.onload
(()=>{
//

    const filmes = document.getElementById("btn-filmes")
    const home = document.getElementById("btn-home")
    
    btnfilme = new events("click",filmes,showFilms)
    btnhome = new events("click", home,showHome)
})()