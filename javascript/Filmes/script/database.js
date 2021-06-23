
function savedb(){
    var filme = document.getElementById("filme")
    var year = document.getElementById("year")
    var gen = document.getElementById("gen")
    var dur = document.getElementById("dur")
    var osc = document.getElementById("osc")

    var dados= [filme.value,year.value,gen.value,dur.value,osc.value]

    if(localStorage.getItem(id)==null){
    var id = 1
    localStorage.setItem(id,dados)
    console.log(localStorage.getItem(id,dados))
    id++
    }else{

    

}
}