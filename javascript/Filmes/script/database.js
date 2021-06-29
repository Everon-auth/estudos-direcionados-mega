/* Salva os dados no localstorage no formato JSON */
function savedb(){
    var filme = document.getElementById("filme").value
    var year = document.getElementById("year").value
    var gen = document.getElementById("gen").value
    var dur = document.getElementById("dur").value
    var osc = document.getElementById("osc").value
    
    var dado = JSON.parse(localStorage.getItem("filmes"));
        //se não houver nenhum dado, ele cria e adiciona os valores dos inputs
    if(dado == null){
        dado = [{
            "filme": filme,
            "ano":year,
            "genero":gen,
            "duração":dur,
            "oscar":osc
        }]
        //se não, adiciona os dados depois da ultima
    }else{
        dado.push({
            "filme":filme,
            "ano":year,
            "genero":gen,
            "duração":dur,
            "oscar":osc
        })

    }
    //envia os dados
    dado = JSON.stringify(dado)
    localStorage.setItem("filmes",dado)


}

/* Recupera os dados do localstorage para manipular */
function getdb(){

    var dado = JSON.parse(localStorage.getItem("filmes"));
    var database = Object.values(dado)

        //cria os elementos de vizualização de lista curta
    for (let i = 0; i < database.length; i++) {
        var aaa = database[i]

        section.style.alignItems="flex-start"
        //span
        var span = document.createElement("span")
        section.appendChild(span).setAttribute("class", "lista")
        var spanclass = document.getElementsByClassName("lista")[i]
        

        
        spanclass.style.justifyContent="flex-start"


        // checkbox
        var input = document.createElement("INPUT")
        spanclass.appendChild(input).setAttribute("class", "checkbox")
        var checkbox = document.getElementsByClassName("checkbox")[i]
        checkbox.setAttribute("id", "ch"+i)
        checkbox.setAttribute("type","checkbox")
        checkbox.style.width="100px"
        checkbox.minWidth="50px"

        //separação
        var separa = document.createElement("DIV")
        spanclass.appendChild(separa).setAttribute("class","separacao")

        //label
        var label = document.createElement("LABEL")
        spanclass.appendChild(label).setAttribute("class","labels")
        var labels = document.getElementsByClassName("labels")[i]
        labels.innerText="Nome do filme:"
        labels.style.width="200px"

        // output
        var output = document.createElement("OUTPUT")
        spanclass.appendChild(output).setAttribute("class", 'ou'+i)
        var outputs = document.getElementsByClassName("ou"+i)[0]
        outputs.value = aaa["filme"]
        outputs.style.width="100%"
        outputs.style.whiteSpace="nowrap"

        //vizualizar
        var createspan = document.createElement("SPAN")
        spanclass.appendChild(createspan).setAttribute("class", "sp"+i)
        var span2 = document.getElementsByClassName("sp"+i)


        span2[0].style.justifyContent="flex-end"
        span2[0].style.display="flex"
        span2[0].style.minWidth="205px"
        var view = document.createElement("IMG")
        span2[0].appendChild(view).setAttribute("id","vi"+i)
        var views = document.getElementById("vi"+i)
        views.setAttribute("src", "assets/eye.png")
        views.style.width="30px"
        views.style.marginRight="40px"
        views.style.cursor="pointer"

        //editar
        var edit = document.createElement("img")
        span2[0].appendChild(edit).setAttribute("id", "ed"+i)
        var edits = document.getElementById("ed"+i)
        edits.setAttribute("src","assets/editing.png")
        edits.style.width="30px"
        edits.style.marginRight="40px"
        edits.style.cursor="pointer"

        //excluir
        var exclui = document.createElement("img")
        span2[0].appendChild(exclui).setAttribute("id", i)
        var excluir = document.getElementById(i)
        excluir.setAttribute("src", "assets/bin.png")
        excluir.style.width="25px"
        excluir.style.marginRight="40px"
        excluir.style.cursor="pointer"
        
        
        //hr
        var hr = document.createElement("HR")
        section.appendChild(hr)
       
           

    }
}