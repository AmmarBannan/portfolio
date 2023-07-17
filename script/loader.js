let loader= document.querySelector(".preloader")
let loadingTime=null;

window.addEventListener("load",()=>{
    setTimeout(()=>loader.style.visibility="collapse", 500);
})