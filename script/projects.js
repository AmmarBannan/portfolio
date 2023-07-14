let projects=[
    {name:"RateMe",language:["HTML","CSS","Python","MySQL"],plateform:"Django",date:202011,description:"it aims to increase competition between companies and minimise confusion to customer according to other customer reviews, its simple,has availability to list a product, rate it and give a feedback, and other can share there opinion as well",link:"#"},
    {name:"MoneyManage",language:["JSP","CSS","Java","MySQL"],plateform:"Spring",date:202012,description:"application gives regular user a full supervision of encoming and expenses in a specfic term he put and adding a repated money flow planned by user",link:"https://github.com/AmmarBannan/MoneyManager.git"},
    {name:"VoteApp",language:["HTML","CSS","JavaScript","MongoDB","React","Express","NodeJS"],plateform:"MERN",date:202101,description:"election application help goverment managing votes and filter result acording to region, race, gender or age, login with user token",link:"#"},
    {name:"vendingMachine",language:["HTML","CSS","Java"],plateform:"spring",date:202110,description:"simulation of vending machine, buy and return exchange",link:"https://github.com/AmmarBannan/vendingmachine.git"},
    {name:"ChessGame",language:["HTML","CSS","JavaScript","React","NodeJS"],plateform:"react",date:202211,description:"fully fuction chess game for 2 player with color custom"},
]

let projectPlace=document.querySelector(".projectsList");

let newRealesed=true;

function dateUp( a, b ) {
    if ( a.date < b.date ){
      return 1;
    }
    if ( a.date > b.date ){
      return -1;
    }
    return 0;
  }
  function dateDown( a, b ) {
    if ( a.date < b.date ){
      return -1;
    }
    if ( a.date > b.date ){
      return 1;
    }
    return 0;
  }

let changeLanguage=()=>{
    let language=document.getElementsByClassName("filter__language");
}
let selectlang=(prop,propVal)=>projects.filter(val=>val[prop].includes(propVal))

let projectView=(list)=>"<tr><th>name</th><th>data</th><th>favorite</th></tr>"+list.map((val,index)=>{
  let desc=val.description
  let name=val.name
    return `<tr class="project" value="${val.name}">
        <td class="item project__name"><p class="projec-name" onclick="details('${desc}','${name}')" > ${val.name}</p></td>
        <td class="item project__Plateform">${val.plateform}</td>
        <td class="item project__date">${val.date/100}</td>
    </tr>`}
).join(" ");
projectPlace.innerHTML=projectView(projects);

document.querySelector(".filter__Date").addEventListener("click",()=>{
    newRealesed?projects.sort(dateUp):projects.sort(dateDown);
    newRealesed=!newRealesed;
    filteredProject(projects)
})

document.querySelector(".filter__language").addEventListener("change", (event) => {
    if(event.target.value!=""){
        projectPlace.innerHTML=projectView(selectlang("language",event.target.value));
    }
    else{
        projectPlace.innerHTML=projectView(projects);
    }
});

function details(desc,name){
  document.querySelector(".description").innerHTML=`<span class="description__title">${name}</h3> <p class="description__text">${desc}</span>`
}

// function showDesc(project){
//   // document.querySelector("description").innerHTML=
//   console.log(project.description)
// }


// document.querySelector(".project__name").addEventListener("click",(project)=>{
//   console.log(project.target.value)
// })

