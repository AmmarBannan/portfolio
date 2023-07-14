let cardHistory=[0]

let fontAdapter=()=>{
    for(let i=0;i<9;i++){
        let cardWidth=parseInt(document.querySelector(`#card${i}`).style.width.slice(0, -1))*document.body.clientWidth/100*2
        document.querySelectorAll(`#card${i} *`).forEach((font)=>font.style.fontSize =`${cardWidth*0.0172}px` )
        document.querySelectorAll(`#card${i} li`).forEach((font)=>font.style.fontSize =`${cardWidth*0.0172}px` )
        document.querySelectorAll(`#card${i} figcaption`).forEach((font)=>font.style.fontSize =`${cardWidth*0.021}px` )
        document.querySelectorAll(`#card${i} h1`).forEach((font)=>font.style.fontSize =`${cardWidth*0.04177}px`)
        document.querySelectorAll(`#card${i} h2`).forEach((font)=>font.style.fontSize =`${cardWidth*0.036857}px`)
        document.querySelectorAll(`#card${i} h3`).forEach((font)=>font.style.fontSize =`${cardWidth*0.0294857}px`)
        document.querySelectorAll(`#card${i} h4`).forEach((font)=>font.style.fontSize =`${cardWidth*0.02457}px`)
    }
}

let classSelected=()=>{

    let current=cardHistory[cardHistory.length-2]
    let next=cardHistory[cardHistory.length-1]
    let timer = null;
    let i=current;
    let direction=Math.abs(next-current)<Math.abs(current-next)?1:-1
    let speed=300/Math.abs(next-current)
    
    timer = setInterval(() => {

        console.log("here:",Math.abs(i-direction)%9,"=>",i%9)
        if(Math.abs(i)%9===next)clearInterval(timer);
        document.querySelector(`.button${Math.abs(i-direction)%9}`).classList.remove("selected")
        document.querySelector(`.button${i%9}`).classList.add("selected")
        i+=direction
    }, speed);
    document.querySelector(`.button${Math.abs(next)}`).classList.remove("selected")

    
   
}

let edit=(cardId,i=0,len)=>{
    
    let posI=Math.abs(i)
    let card=document.getElementsByClassName("card")[cardId]
    let img=document.querySelector(".card img")[cardId]
    //width
    let width=30/Math.pow(posI+1,.8)
    let widthPX=width/100*document.body.clientWidth
    //height
    let height=1.538*widthPX

    // let shift=500*Math.sign(i)*Math.pow(.8,Math.abs(2-posI))-i*i*5+700
    let rotate=i==0?0:Math.sign(i)*(32*((posI*.8-Math.floor(posI/2.5))%2.1)/1.7+7)

    let shiftX=document.body.clientWidth*(54-width/2-rotate)/100
    let shiftY=document.body.clientHeight*(50-posI*3)/100-height/2
 
    // let width=Math.abs(30-Math.pow(posI,2)*2.4)
   
  
    

    let factor=Math.pow(2,posI)

    //position
    card.style.left=`calc(${shiftX}px)`;

    card.style.top=`calc(1% + ${shiftY}px)`;
    //zindex
    card.style.zIndex=4-Math.abs(i)
    //size
    card.style.height=`${height}px`
    card.style.width=`${width}%`
    // card.style.transform=`scale(1/${factor})`
    // card.style.transform= `scale(${1/(posI*2+1)})`;
    // card.style.fontSize=`${widthPX*.032}px`
    card.style.padding=`${widthPX*.06}px ${widthPX*.03}px`
    let s=posI<4?i:0
    card.style.boxShadow=`${i*4}px ${10-2*posI}px 2px 0px gray, ${i*2}px ${10-posI}px 2px 0px gray`

}
let sort=(j=0,len=9)=>{
    edit(j)
    for(let i=1;i!=Math.ceil((len+1)/2);i++){
        let right=i+j>len-1?i+j-len:j+i //check which one shifted to right
        let left=j-i<0?len-(i-j):j-i//check which one shifted to left
        if(right!==j)edit(right,-i,len)
        if(left!==j)edit(left,i,len)
    }
    fontAdapter()
    classSelected()

}


sort()
let selection=(num=0)=>{
    if(cardHistory.length==8)cardHistory.shift();
    cardHistory.push(num%9)
    sort(num%9)
}

//\\\\\\\\\\\\\\\\\\\\\\CARDS/////////////////////\\
document.body.addEventListener("keyup",(e)=>{
    let lastCard=cardHistory[cardHistory.length-1]
    switch(e.key){
        case "ArrowRight":case "ArrowDown":
            selection(lastCard+1)
            break;
        case "ArrowLeft":case "ArrowUp":
            selection(lastCard-1)
            break;
    }
})

//\\\\\\\\\\\\\\\\\\\\\\BUTTONS/////////////////////\\



