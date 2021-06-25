/* Salva os dados no localstorage no formato JSON */
function savedb(){
    var filme = document.getElementById("filme").value
    var year = document.getElementById("year").value
    var gen = document.getElementById("gen").value
    var dur = document.getElementById("dur").value
    var osc = document.getElementById("osc").value
    
    var dado = JSON.parse(localStorage.getItem("filmes"));

    dado.push({
        "filme": filme,
        "ano":year,
        "genero":gen,
        "duração":dur,
        "oscar":osc
    })

    dado = JSON.stringify(dado)


    localStorage.setItem("filmes",dado)
}

/* Recupera os dados do localstorage para manipular */
function getdb(){

    var dado = JSON.parse(localStorage.getItem("filmes"));
    var database = Object.values(dado)


    for (let i = 0; i < database.length; i++) {
        var aaa = database[i]

 
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

        //vizualizar
        var createspan = document.createElement("SPAN")
        spanclass.appendChild(createspan).setAttribute("class", "sp"+i)
        var span2 = document.getElementsByClassName("sp"+i)

        span2[0].style.justifyContent="flex-end"
        var view = document.createElement("IMG")
        span2[0].appendChild(view).setAttribute("id","vi"+i)
        var views = document.getElementById("vi"+i)
        views.setAttribute("src", "data:image/png;base64,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")
        views.style.width="30px"
        views.style.marginRight="20px"
        views.style.cursor="pointer"

        //editar
        var edit = document.createElement("img")
        span2[0].appendChild(edit).setAttribute("id", "ed"+i)
        var edits = document.getElementById("ed"+i)
        edits.setAttribute("src","data:image/png;base64,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")
        edits.style.width="40px"
        edits.style.marginRight="20px"
        edits.style.cursor="pointer"

        //excluir
        var exclui = document.createElement("img")
        span2[0].appendChild(exclui).setAttribute("id", i)
        var excluir = document.getElementById(i)
        excluir.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8zMzMfHx/AwMAwMDBISEgrKyslJSXi4uJeXl6goKAbGxvZ2dnMzMwiIiK0tLRzc3ORkZGDg4Pz8/MUFBRYWFjX19fp6enw8PA6OjrExMRSUlKXl5dBQUGjo6O5ubl+fn4RERFtbW2JiYmKkgfIAAAFH0lEQVR4nO2da5eqIBSGRySsKK1Ru2u3//8fT62Zc2lvG4VQ6Kz3+YwsHt3ABi0+PvpjnS1GMmpDjhbZusdW9MZsWhapahe8Kaq0KKcz3w02ZLcXSRe7P5aJ2O98N9qA2USY6H1Lism7PMf16ayM/e6o8+ktOuROJVZ+dxL1BqFap+YB+heZ1r4F2rjqF/zu6KtvhR/JL+JFwSgSl9y3xg9c0pcFoyi9+NZ4zvL1J3hHLH2LPONYOBGMouLoW6WZWaccrQtShTn3j+zm+SbUyLdME7WbTviFCHBazI0y7TZkEt6UcXiWq0n1E89uS3LwLUTZNHdCmRajxenzGafFqHiS5amNbyXCtekRSlFmbQ3dZGXjUisJLHvLq4ZWqlHc6eK4aRSWVVg9cdUwkKadE8y8KdsTq15bbMqSB2myMLh+0XB9WLnbngWpKo0qKFmgyn1PbbVizFaFMjLbkFhH7B7pcU+ttSFj/ch4PuPzaZr10lY7rjTGZGQ6EubsIaqQ5ouStc5kmPliwe6SWU/uFxZhwnyFd2QTTtJDS20508YV5jnXhq2fzz201BZmKCwqYc8wIMOc3n4ZWdTChpoinLyNBZjcWtSyZYbhLC/+f0MepW4Mh4nS9WoXt8FTmm37RZTdllaSZu0XrV59WzWfSC1aaVr7mMMrSdsv0nIyf0XwVDjbA+0LqYqTvaCT1xD9Y/+i4+ByB7RPhOXG3Dr4CP2NVHbjzdMd0PCw3F1lS6JwsVxoyTcylFaGr76RHxINQxgGDwxhGD4wfCD/zbvk3XfEn1Z3MLzo5AvfrTbiu826y0KK7a6/E53eJsAwaGAIw/CBIQzDB4YwDB8YwjB8OhlezvoRtlCUQndFiDRNfiJNhUFtbBc+ISXOXdaH4xmhJoqyoiWeM98ds+nyOdPsuJt3r45+iZzUtITV94w7sp0h/f3cg/40XLj5QWYcsGG3D8nbgOGAwNASGA4IDC2B4YDA0BIYDggMLYHhgPgzjDMC+/1nTktk7H30ipbgzfdnWOr0gfOUlhgX4qGEKNhqfHp+rETzDw79GU7I7lXCDen+luKGZLdETWAIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQw7GO61eKDxv6Afafov6McSeh+Q4TwmzGiJnJaI2f95z2iJeUCGQwFDS2A4IDC0BIYDAkNL2AmPWzZZD0S+pYZuTnhc6Ygorp3Ua86aCEaanYVixZgeterozplDoylKrI4dZawjcus6HUnbB/QgXxm5iaacnuDqKjhM4d2lcjQi0NWfu5qN4He6YQVpBz0Q+FZ1uXFUd3c2Jb3RUVI7qntGO/hNcXt0VHlXjlsmGAm2DLWFTkP3QBVqmcXzYYizq+InVt8mZleCH0sWpvf6VSqGIlXc7xakS2eG46Khfv/wrR57Ppseom+ST3eCt3SpKUr8It0mj4fwHmJycCn4kdPMzTsycpx1jGnG5BvtcJj54hiWou4h4ziEpKjddsJvPsNR1C4nin+oGzInH0jhKuNm7CTPfodHyR73GMZ77fsxSr13Poo+EFepT0eZVm42EH+irnRjpj+AntJVbz3wX/L5tSoSNaimVCopqut8uN2TWX1YTKrBBKvJ4lBbLuh/AchEvVYgXuT5AAAAAElFTkSuQmCC")
        excluir.style.width="25px"
        excluir.style.marginRight="20px"
        excluir.style.cursor="pointer"
        
        
        //hr
        var hr = document.createElement("HR")
        section.appendChild(hr)
       
           

    }
}

function exclude(){

}