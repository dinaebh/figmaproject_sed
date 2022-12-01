const API_URL =
  "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2";

window.onload = async function (event) {
     await dinamicSection();  randomProjects(); 
};

async function fetchProjects() {
  const project = await fetch(API_URL);
  const data = await project.json();
  const filteredProjects = data;
  const finalProjects = filteredProjects.sort((a,b) => {
    const result = 0.5 -Math.random();
    return result;
});
return finalProjects;
}




async function randomProjects(){
    const sortedProjects = await fetchProjects();
    const allCards = document.getElementById("all-cards");
    const title = document.querySelector("h1").innerHTML;
    console.log(title);
    const filteredProjects = sortedProjects.filter(function(element){
      if(element.name == title){
        return false;
      } else{
        return true;
      }
    });
     filteredProjects.slice(0,3).forEach((element) => {
      allCards.innerHTML += `
      <div class= "card">
          <img  class="embed-responsive embed-responsive-1by1" src="${element.image}" alt="${element.image}">
      <div class="container">
          <h4>${element.name}</h4>
          <p>${element.description}</p>
          <a href="./project-page.html?uuid=${element.uuid}">Learn more</a>
  
      </div>
      </div>
      `;
    });
}


async function dinamicSection(){
    const params = new URLSearchParams(window.location.search)
    const uuid = params.get("uuid")
    const randomSort = await fetchProjects();
    const section = document.getElementById("dinamic-section")
    const selected = randomSort.filter(function(item){
        if(item.uuid == uuid){
            return true
        } else{
            return false;
        }
        
    })
   console.log(selected);
    selected.forEach((element)=>{
    section.innerHTML += `
    <div>
    <h1>${element.name}</h1>
    <div class="sub">
    <p class="sub-1">${element.description}</p>
    <p class="sub-2">Completed on <span class="sub-3"> ${element.completed_on}</span></p>
</div>
</div> 

<div class="main-part">
<div class="container-image">
    <div class="image-blur"></div>
    <div class="image-main"></div>
</div>
<br>
<div class="main-text">
<p class="main-text1">
${element.content}

</p>
<p class="main-text2">
    
</p>
</div>
</div> 
    `

    });
 
}

