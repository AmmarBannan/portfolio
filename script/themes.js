let mode


if ( localStorage.getItem("mode") !== null) {
    mode=localStorage.getItem("mode");
    
}else{
    localStorage.setItem("mode", true);
}

mode=localStorage.getItem("mode")

var link = document.createElement( "link" );
if(mode=="true"){
    link.href="./css/themes/dark.css";
    
}else{
    link.href="./css/themes/light.css";
    document.querySelector('.switch input').checked = false;
}
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";


console.log("here:",link.href)

document.getElementsByTagName( "head" )[0].appendChild( link );

document.querySelector(".switch input").addEventListener("click",()=>{
    if(mode){
        mode=false;
        document.querySelector("link[href='./css/themes/dark.css']").href = "./css/themes/light.css";
        document.querySelector('.switch input').checked = false;
    }else{
        mode=true;
        document.querySelector("link[href='./css/themes/light.css']").href = "./css/themes/dark.css";
        document.querySelector('.switch input').checked = true;
    }
  
    localStorage.setItem("mode", mode);
    
})





