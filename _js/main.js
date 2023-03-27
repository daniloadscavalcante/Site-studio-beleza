const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const closeToggle = document.querySelector(".close-toggle");

toggle.addEventListener("click", ()=>{
    menu.style.display="flex";
});

closeToggle.addEventListener("click", ()=>{
    menu.style.display="none";
});

function sendMail(){
    var dados = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        whatsapp: document.getElementById("zap").value
    };
}




emailjs.send(serviceID,templateID,dados)
.then(function (res) {
        
        alert("seu email envou" + res.status);
    })
   