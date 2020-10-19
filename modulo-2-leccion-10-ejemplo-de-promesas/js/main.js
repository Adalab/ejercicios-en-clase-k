'use strict';
let name = "maria";

fetch('./server-data/perretes.json')
//fetch('https://swapi.dev/api/starships/9/')
    .then(response => response.json())
    .then(data =>{
        console.log("informacion", data.name);
        name  = data.name;
    })
    .then(function (){
        console.log("respuesta", name);
        return name;
    })
    .then(info =>{
        console.log("respuesta2", info)
    })
    .catch(msj => {
        console.log("ha ocurrido un error", msj);
        document.querySelector("h1").innerHTML = msj;
    })
 
name  = "luis";
console.log('Continuo haciendo cosas');