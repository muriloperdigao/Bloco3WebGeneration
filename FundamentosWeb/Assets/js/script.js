/* 
Variáveis:
var = variável global
let = apenas no escopo
const = global, porém constante (incomum)

linguagem Case Sensitive

acesso por:
tag: getElementByTagName()
ID:  getElementById()
nome: getElementsByName()
class: getElementsByClassName()
seletor: querySelector() (melhor prática)
*/

let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")


nome.style.width = "100%"
email.style.width = "100%"
assunto.style.width = "100%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome Inválido!"
        txtNome.style.color = "red"
    }
    else{
        txtNome.innerHTML = "Nome Válido!"
        txtNome.style.color = "green"
    }
}   

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1){
        txtEmail.innerHTML = "E-mail Inválido!"
        txtEmail.style.color = "red"
    }
    else{
        txtEmail.innerHTML = "E-mail Válido!"
        txtEmail.style.color = "green"
    }
}   

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length < 20){
        txtAssunto.innerHTML = "Assunto Inválido!"
        txtAssunto.style.color = "red"
    }
    else{
        txtAssunto.innerHTML = "Assunto Válido!"
        txtAssunto.style.color = "green"
    }
}   
