const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const from = document.getElementById("from")

from.addEventListener("submit", e=>{
    e.preventDefault()
    let entrar = false
    let regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 

    if(nombre.value.length <5){
        alert("Nombre muy corto")
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        alert("Email no es valido")
        entrar = true
    }
    if(pass.value.length <8){
        alert("Contraseña muy corto")
        entrar = true
    }
})