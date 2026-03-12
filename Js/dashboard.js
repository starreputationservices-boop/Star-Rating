console.log("Dashboard Loaded")

let email = localStorage.getItem("customerEmail")
let qr = localStorage.getItem("customerQR")

if(!email){
alert("Please login first")
window.location.href="login.html"
}

document.getElementById("email").innerText = email

document.getElementById("qrlink").innerText =
"https://starreputationservices-boop.github.io/Star-Rating/?id=" + qr
