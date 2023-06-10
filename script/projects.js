let projects=[
    {name:"RateMe",language:["HTML","CSS","Python","MySQL"],plateform:"Django",date:202011,description:"the goal of this application is to improve the life quality, in my opinion customer's  review 'feedback' is important as value of the product , the application helps customer ivaluate the product and helps them to decide which product fits him"},
    {name:"MoneyManage",language:["JSP","CSS","Java","MySQL"],plateform:"Spring",date:202012,description:"application gives regular user a full supervision of encoming and expenses in a specfic term he put and adding a repated money flow planned by user"},
    {name:"VoteApp",language:["HTML","CSS","JavaScript","MongoDB","React","Express","NodeJS"],plateform:"MERN",date:202101,description:"election application help goverment managing votes and filter result acording to region, race, gender or age"},
    {name:"vendingMachine",language:["HTML","CSS","Java"],plateform:"spring",date:202110,description:"simulation of vending machine, buy and return exchange"},
    {name:"ChessGame",language:["HTML","CSS","JavaScript","React","NodeJS"],plateform:"react",date:202211,description:"fully fuction chess game 2 player with color custom"},
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
    console.log(language)
}
let selectlang=(prop,propVal)=>projects.filter(val=>val[prop].includes(propVal))

console.log(document.querySelector(".filter__language").value)

let projectView=(list)=>"<tr><th>name</th><th>data</th><th>favorite</th></tr>"+list.map((val,index)=>
    `<tr>
        <td class="item project_name">${val.name}</td>
        <td class="item project_Plateform">${val.plateform}</td>
        <td class="item project_date">${val.date/100}</td>
    </tr>`
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
