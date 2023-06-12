
let postion=(cardId,i=0)=>{
    let posI=Math.abs(i)
    let card=document.getElementsByClassName("card")[cardId]
    let shift=480*Math.sign(i)*Math.pow(.6,Math.abs(2-posI))+220
    console.log("cal",shift)
    //position
    card.style.left=`calc(50% - ${shift}px)`;
    card.style.top=`calc(15% + ${posI*30}px)`;
    //zindex
    card.style.zIndex=4-Math.abs(i)
    //size
    card.style.height=`${700*Math.pow(.9,posI*2)}px`
    card.style.width=`${440*Math.pow(.9,posI*2)}px`
}

let sort=(j=0,len=9)=>{
    postion(j)
    for(let i=1;i!=Math.ceil((len+1)/2);i++){
        console.log(i)
        let right=i+j>len-1?i+j-len:j+i
        let left=j-i<0?len-(i-j):j-i
        if(right!==j)postion(right,-i)
        if(left!==j)postion(left,i)
    }
}


sort()
// classList.contains("foo")
// while(i<3){
//     document.getElementsByClassName("card")[i].style.left=`${i*480}px`;
//     i++;
// }



let selectCard=(num)=>{
    sort(num)
}

