let mode =false

var link = document.createElement( "link" );
link.href="./css/themes/light.css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";

document.getElementsByTagName( "head" )[0].appendChild( link );

document.querySelector(".switch input").addEventListener("click",()=>{
    if(mode){
        mode=false;
        document.querySelector("link[href='./css/themes/dark.css']").href = "./css/themes/light.css";
    }else{
        mode=true;
        document.querySelector("link[href='./css/themes/light.css']").href = "./css/themes/dark.css";
    }
  
   

    
})





