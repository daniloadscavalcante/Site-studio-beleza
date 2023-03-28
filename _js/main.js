const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const closeToggle = document.querySelector(".close-toggle");


toggle.addEventListener("click", () =>{
    menu.style.display="flex";
});

closeToggle.addEventListener("click", ()=>{
    menu.style.display="none";
});

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const imagens = document.querySelectorAll(".galeria img");
imagens.forEach(imagem =>{
    imagem.addEventListener("click", e => {
        lightbox.classList.add("active");
        const img = document.createElement("img");
        img.src = imagem.src;  
        img.style.width="auto";
        img.style.height="400px";
        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild);
        }             
        lightbox.appendChild(img);
    })
})

lightbox.addEventListener("click", e => {
    if(e.target !== e.currentTarget) return
    lightbox.classList.remove("active")
})
const btneviar = document.querySelector("#enviar");
function send(){
   
        emailjs.send("service_afeo8ha","template_ysikz9b",{
            name: document.querySelector("#form input[type=text]").value,
            email: document.querySelector("#form input[type=email]").value,
            whatsapp: document.querySelector("#form input[type=tel]").value,          
        }).then(response=>{
            console.log("sucesso", response.status);
        },(error)=>{
            console.log(error);
        })
}

btneviar.addEventListener("click", e => {
    e.preventDefault()  
    let nomef = form.nome.value;
    let emailf = form.email.value;
    let zapf = form.zap.value;
    if (nomef =="") {
        alert("preecha o nome")
        form.nome.focus();
    }else if(emailf ==""){
        alert("preecha o email")
        form.email.focus();
    }else if(zapf ==""){
        alert("insira um numero")
        form.zap.focus();
    }
    else {
        send()
        document.querySelector('#form').reset(); 
    }    
})
 




