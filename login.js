const users={
"customer1@gmail.com":"QR001",
"customer2@gmail.com":"QR002"
}

function login(){
let email=document.getElementById("email").value

if(users[email]){
localStorage.setItem("user",email)
localStorage.setItem("qr",users[email])
window.location.href="dashboard.html"
}else{
alert("Email not registered")
}
}
