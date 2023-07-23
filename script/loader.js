let loader= document.querySelector(".preloader")
let loadingTime=null;

function loading(){
    setTimeout(()=>loader.style.display="none", 500);
}

window.addEventListener("load",loading)

