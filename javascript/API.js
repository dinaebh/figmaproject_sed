const API_URL =
  "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2";

window.onload = function (event) {
  sixProjects();
};

async function fetchProjects() {
  const project = await fetch(API_URL);
  const data = await project.json();
  const filteredProjects = data;
  const finalProjects = filteredProjects.sort(function (a, b) {
    if (a.uuid < b.uuid) {
      return -1;
    }
    if (a.uuid > b.uuid) {
      return 1;
    }
    return 0;
  });
 
  return finalProjects;
}

async function sixProjects(){
    const sortedProjects = await fetchProjects();
    const allCards = document.getElementById("all-cards");
    sortedProjects.slice(0, 3).forEach((element) => {
      allCards.innerHTML += `
      <div class= "card">
          <img  class="embed-responsive embed-responsive-1by1" src="${element.image}" alt="${element.image}">
      <div class="container">
          <h4>${element.name}</h4>
          <p>${element.description}</p>
          <a href="project-page.html?uuid=${element.uuid}">Learn more</a>
  
      </div>
      </div>
      `;
    });
}



// window.addEventListener("load", function(){
//     fetchProjects();
// });

// const params = new URLSearchParams(window.location.search);
// const uuid = params.get(uuid)

// antes del return de la funciónde fetch hacer un Data
// const filteredProjects = data.filter(function(noticia){
//     return (API_URL.uuid = uuid)
// });
// if (filteresNoticias.lenght === 0){
//     //alert ("pagina no encontrada")
//     //redirect a 404
// }
// }
