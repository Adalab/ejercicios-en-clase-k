"use strict";
const palettesContainer  = document.querySelector('.js-palettes-container');

let palettes = [];
let favoritesLis = [];


function getData(){
  fetch("https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json")
    .then(response => {return response.json();}
    )
    .then(function(data){
      palettes = data.palettes;
      paintPalettes();
      listenPalette();
      setLocalStorage()
    })
}

function paintPalettes(){
  let html = "";

for (let i = 0; i < palettes.length; i++) {
    let classF;
    const favoriteIndex = favoritesLis.indexOf(i);
    const favorite = favoriteIndex !== -1 ;
    if(favorite === true){
      classF = "palettes__item--favorite";
    }
    else{
      classF = "";
    }
    //aqui debemos asignar {getFilterClassName(favoriteIndex)} dentro del atributo class  para que oculte las LI que no cumplen con la condicion de busqueda de el formulario

    html += `<li class = "js-palette-item  ${classF} ${getFilterClassName(i)} "  id = "${i}" >`;
    html += `<h2 class= "palettes__name">${palettes[i].name}</h2>`;
    html += `<div class="palettes__colors">`;
    for (const color of palettes[i].colors ) {
      html += `<div class="palettes__color" style="background-color:#${color}"></div>`;
    }
    html += "</div>";
    html += "</li>";
  }
  palettesContainer.innerHTML = html;
}

const favoritesPalette = function(ev){
  const clicked = parseInt(ev.currentTarget.id);
  //const isFavorite = favoritesLis.find(click =>{ return click; });
  // for comentado
  /* La siguiente forma es usar for clasico****************************************/
  //Es necesario recorrer el array de favoritos y al encontrar una coincidencia terminarlo
 /* let indexFav;
  let isFavorite = false;
  //recorro el array de favoritos 
  for (let i = 0; i < favoritesLis.length; i++) {
    //evaluo si el valor de cada una de las posiciones del array es igual al valor del click dado por la usaria y de ser  verdadero obtengo su indice, 
    if (favoritesLis[i] === clicked){
      isFavorite = true;
      indexFav = favoritesLis.indexOf(clicked);
      //si entra en este if es porque encontro una coincidencia por lo tanto no deberia seguir ejecutando el ciclo for por lo tanto lo obligo a que finalice en la siguiente linea
      break;
    }
    else{
      //en este caso indica que el elemento no exite en el array de favoritos 
      isFavorite = false;
    }
  }
  */
  /************** la forma como lo hicimos en clases ************** */
  const indexFav = favoritesLis.indexOf(clicked);
  const isFavorite = indexFav !== -1 ;
  if(isFavorite === false){
    favoritesLis.push(clicked);
  }
  else{
    favoritesLis.splice(indexFav,1);
  }
  paintPalettes();
  listenPalette();
}

function listenPalette(){
  const paletteItems = document.querySelectorAll(".js-palette-item");
  for (const paletteItem of paletteItems) {
    paletteItem.addEventListener('click', favoritesPalette);
  }
}

function setLocalStorage(){
  localStorage.setItem("palettes",JSON.stringify(palettes));
}

function getLocalStorage(){
  const localPalette = localStorage.getItem("palettes");
  const localPaletteJ = JSON.parse(localPalette);
  if(localPaletteJ ===null){
    getData();
  }
  else{
    palettes = localPaletteJ;
    paintPalettes();
    listenPalette();
  }
}
// buscador
//luego para filtrar al hacer click en el boton  del formulario 
//esta le asignara  la clase  palettes__item--hidden a las que no 
//cumplan la condicion  de busqueda  ingresada en el form

const getFilterClassName = paletteIndex => {

  const palette = palettes[paletteIndex];
  const name = palette.name.toLowerCase();
  const filterValue = filterInput.value.toLowerCase();
  if (name.includes(filterValue)) {
    return '';
    
  } else {
    // esta es la clase definida en el css a usar para ocultar las LI que no coincidan
    return 'palettes__item--hidden';
  }
};
//funcion manejadora del evento click del formulario para la busqueda
const handleFilter = () => {
  paintPalettes();
  listenPalette();
};

const filterInput = document.querySelector('.js-filter');
filterInput.addEventListener('keyup', handleFilter);

getLocalStorage();

