function togglePassword(){

let password = document.getElementById("password")

if(password.type === "password"){

password.type = "text"

}else{

password.type = "password"

}

}


document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault()

let usuarioIngresado = document.getElementById("usuario").value
let passwordIngresado = document.getElementById("password").value



let usuarioGuardado = localStorage.getItem("usuario")
let passwordGuardado = localStorage.getItem("password")

if(usuarioIngresado === usuarioGuardado && passwordIngresado === passwordGuardado){

window.location.href = "index.html"

}else{

document.getElementById("error").innerText = "Usuario o contraseña incorrectos"

}

})