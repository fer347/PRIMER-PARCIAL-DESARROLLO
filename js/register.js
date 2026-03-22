function togglePassword(){

let password = document.getElementById("newPassword")

if(password.type === "password"){

password.type = "text"

}else{

password.type = "password"

}

}


document.getElementById("registerForm").addEventListener("submit", function(e){

e.preventDefault()

let user = document.getElementById("newUser").value
let pass = document.getElementById("newPassword").value

if(user === "" || pass === ""){

document.getElementById("mensaje").innerText = "Completa todos los campos"

return

}

localStorage.setItem("usuario", user)
localStorage.setItem("password", pass)

document.getElementById("mensaje").innerText = "Cuenta creada correctamente"

setTimeout(function(){

window.location.href = "login.html"

},1500)

})