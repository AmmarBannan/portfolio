function loading(ms=500){
    setTimeout(()=>loader.style.visibility="collapse", ms);
}
let expandWidth=-1;

let cardHistory=[0]

let fontAdapter=(container,i)=>{
        let cardWidth=parseInt(container.style.width.slice(0, -1))*2
        // cardWidth=cardWidth>550?cardWidth=550:cardWidth
        document.querySelectorAll(`#card${i} *`).forEach((font)=>font.style.fontSize =`${cardWidth*0.0172}px` )
        document.querySelectorAll(`#card${i} li`).forEach((font)=>font.style.fontSize =`${cardWidth*0.0172}px` )
        document.querySelectorAll(`#card${i} figcaption`).forEach((font)=>font.style.fontSize =`${cardWidth*0.021}px` )
        document.querySelectorAll(`#card${i} h1`).forEach((font)=>font.style.fontSize =`${cardWidth*0.04177}px`)
        document.querySelectorAll(`#card${i} h2`).forEach((font)=>font.style.fontSize =`${cardWidth*0.036857}px`)
        document.querySelectorAll(`#card${i} h3,#card${i} span`).forEach((font)=>font.style.fontSize =`${cardWidth*0.0294857}px`)
        document.querySelectorAll(`#card${i} h4`).forEach((font)=>font.style.fontSize =`${cardWidth*0.02457}px`)
}

function transparency(cardid,i){
    // const cssObj = window.getComputedStyle(card, null);
    let card= document.querySelector(`#card${cardid}`)
    const cssObj = card
    console.log("cssObj",card.style.getPropertyValue("background"))
    if(i==0){card.style.background=cssObj.getPropertyValue("background-color").slice(0, -4)+'0.98)'}
    else{ card.style.background=cssObj.getPropertyValue("background-color").slice(0, -4)+'0.79)'}
}



function expand(id){
    expandWidth=id
}

let order="none"
let lastExt=-1
let expansion=(id,open)=>{
    lastExt=id
    order=open?"flex":"none"
    let extension=document.querySelector(`#card${id} #extension`)
    extension.style.display=order;
    extension.style.height=document.querySelector(`#card${id} .container`).style.getPropertyValue("height")
    extension.style.width=document.querySelector(`#card${id} .container`).style.getPropertyValue("width")
}



let edit=(cardId,i=0,len)=>{

    let posI=Math.abs(i)
    let card=document.querySelector(`#card${cardId}`)
    let container=document.querySelector(`#card${cardId} .container`)
    
    //width
    let width=30/Math.pow(posI+1,.8)
    let widthPX=width/110*document.body.clientWidth

    //height
    let height=.90*document.body.clientHeight/Math.pow(posI+1,.8)
    if(height<1.5*widthPX||height>1.5*widthPX)height=widthPX*1.5

    let rotate=i==0?0:Math.sign(i)*(32*((posI*.8-Math.floor(posI/2.5))%2.1)/1.7+7)
    
    let factorX=order!=="none"&&i==0?2:1
    let shiftX=document.body.clientWidth*(50-rotate)/100-widthPX/2*factorX
    let shiftY=document.body.clientHeight*(50-posI*3)/100-height/2-25
    if(shiftY<0)shiftY=0

    card.style.top=`calc(1% + ${shiftY}px)`;
    card.style.left=`calc(${shiftX}px)`;

    card.style.zIndex=4-Math.abs(i)

    let EWidth=widthPX
  
    container.style.height=`${height}px`
    container.style.width=`${EWidth}px`
    
    card.style.padding=`${widthPX*.06}px ${widthPX*.03}px`

    // transparency(cardId,posI)
    fontAdapter(container,cardId)
    
}


let buttonSelected=(cardHistory)=>{

    let current=cardHistory.length>=2?cardHistory[cardHistory.length-2]:0
    let next=cardHistory[cardHistory.length-1]
    let timer = null;
    let i=current
    let direction
    if(Math.abs(next-current)<6){
        // if(Math.abs(9-(next-current))<5)
        if(next>current)direction=1
        else direction=-1
    }
    else{
        if(next>current)direction=-1
        else direction=1
    }
    if(next==current)direction=0
    let speed=300/Math.abs(next-current)
    timer=setInterval(()=>{
        if(i==0 && direction==-1)i=9
        if(i==9 && direction==1)i=0
        if(document.querySelector(`.button${i%9}`).classList.contains("selected"))document.querySelector(`.button${i%9}`).classList.remove("selected")
        i=(i+direction)%9
        if(next==i)clearInterval(timer)
        if(cardHistory.length==1){document.querySelector(`.button0`).classList.add("selected");clearInterval(timer)}
        document.querySelector(`.button${i}`).classList.add("selected")
    },speed)
}

function background(i){
    document.body.style.backgroundImage=`url("../static/${i}.jpg")`;
}


let sort=(j=0,len=9)=>{
    if(cardHistory.length==8)cardHistory.shift();
    if(j%9!==cardHistory[cardHistory.length-1])cardHistory.push(j%9)
    edit(cardHistory[cardHistory.length-1])
    for(let i=1;i!=Math.ceil((len+1)/2);i++){
        let right=i+j>len-1?i+j-len:j+i //check which one shifted to right
        let left=j-i<0?len-(i-j):j-i//check which one shifted to left
        if(right!==j)edit(right,-i,len)
        if(left!==j)edit(left,i,len)
    }


 
    const card=document.getElementById(`card${j}`)
    const cardsLoaded =new Promise(function (resolve, reject) {
        if (card!=="null"  && card) {
            resolve(j)
        } else {
            console.log("loading ...")
            reject(300);
        }
    }).then(
        function(j){
            buttonSelected(cardHistory);

            background(j);
        },
        function(delayTime){loading(delayTime)}
    )
}


window.addEventListener("resize",()=>{sort()});

sort()
function selection(num=0){
    if(num!==cardHistory[cardHistory.length-1]){
        if(lastExt!==num&&lastExt!==-1){
            console.log("enter")
            expansion(0,false)
        }
            // document.querySelector(`#card${lastExt} #extension`).style.display="none"}
    }
    sort(num%9)
}


//\\\\\\\\\\\\\\\\\\\\\\CARDS/////////////////////\\
document.body.addEventListener("keyup",(e)=>{
    let lastCard=cardHistory[cardHistory.length-1]
    if(lastCard==0)lastCard=9
    switch(e.key){
        case "ArrowRight":case "ArrowDown":
            selection(lastCard+1)
            break;
        case "ArrowLeft":case "ArrowUp":
            selection(lastCard-1)
            break;
    }
})

//\\\\\\\\\\\\\\\\\\\\\\MORE/////////////////////\\

