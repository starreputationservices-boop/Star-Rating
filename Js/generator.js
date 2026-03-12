function generateQR(){

let email = document.getElementById("email").value
let qr = Math.random().toString(36).substring(2,10)

localStorage.setItem("customerEmail",email)
localStorage.setItem("customerQR",qr)

document.getElementById("result").innerText =
"Customer QR ID: " + qr

}
