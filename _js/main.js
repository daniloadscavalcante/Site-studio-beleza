const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const closeToggle = document.querySelector(".close-toggle");

toggle.addEventListener("click", ()=>{
    menu.style.display="flex";
});

closeToggle.addEventListener("click", ()=>{
    menu.style.display="none";
});