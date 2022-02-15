let telefone = document.querySelector("#inputFone")
let email = document.querySelector("#exampleInputEmail1")
let assunto = document.querySelector("#exampleFormControlTextarea1")

function validaTelefone() {
    let txtTelefone = document.querySelector("#txtTelefone")
    if(telefone.value.length == 11){
        txtTelefone.innerHTML = "Telefone válido"
        txtTelefone.style.color = "green"
    }
    else{
        txtTelefone.innerHTML = "Insira um telefone válido com DDD"
        txtTelefone.style.color = "red"
    }
}   