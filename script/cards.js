
let edit=(cardId,i=0)=>{
    let posI=Math.abs(i)
    let card=document.getElementsByClassName("card")[cardId]
    let img=document.querySelector(".card img")[cardId]


    let left=480*Math.sign(i)*Math.pow(.6,Math.abs(2-posI))-i*i*15+200
    //width
    let width=Math.abs(30-Math.pow(posI,2)*2)
    let widthPX=width/100*window.innerWidth
    //height
    let height=1.538*widthPX

    //position
    card.style.left=`calc(50% - ${left}px)`;
    card.style.top=`calc(10% + ${posI*30}px)`;
    //zindex
    card.style.zIndex=4-Math.abs(i)
    //size
    card.style.height=`${height}px`
    card.style.width=`${width}%`

    console.log(widthPX*.012)
    card.style.fontSize=`${widthPX*.032}px`
    card.style.padding=`${widthPX*.008}% ${widthPX*.004}%`
}

let sort=(j=3,len=9)=>{
    edit(j)
    for(let i=1;i!=Math.ceil((len+1)/2);i++){
        let right=i+j>len-1?i+j-len:j+i //check which one shifted to right
        let left=j-i<0?len-(i-j):j-i//check which one shifted to left
        if(right!==j)edit(right,-i)
        if(left!==j)edit(left,i)
    }
}

sort()

let selectCard=(num)=>{
    sort(num)
}

