'use strict';

const groups = [
  {
    id: 'asfd234',
    isFav: true,
    name: 'Pegatina'
  },
  {
    id: 'sfñasldfkasdf',
    isFav: true,
    name: 'Pegatina'
  },
  {
    id: '9234nd',
    isFav: false,
    name: 'Camela'
  },
  {
    id: '234rfdsf',
    isFav: true,
    name: 'AC-CD'
  }
];
const ul = document.querySelector(".js-list");
function pintarElem(){
  ul.innerHTML= "";
  let i = 1;
  for (const group of groups) {
    // se crea  el elemento
    const li  = document.createElement('li');
    //lo asignas a un elemento padre
    ul.appendChild(li);
    // se le asigna un atributo id
    li.setAttribute('id',i);
    const valueAttri = li.getAttribute('id');
    if (valueAttri === "1"){
      li.classList.add("uno");
    }
    else if(valueAttri === "2"){
      li.classList.add("dos");
    }
    const p = document.createElement('p');
    const span = document.createElement('span');
    

  // li.setAttribute('miatributoeseselmejordelmundo',"hola como estas");
    li.dataset.id = group.id

    li.appendChild(p);
    li.appendChild(span);
    li.classList.add("background");
    //creamos el nodo de texto
    const text = document.createTextNode(group.name);
    // asignamos el texto aun elemento padre
    p.appendChild(text);
    console.log(text);
    i++;
}

}

pintarElem();
const  handleClick = function (ev){
  const clickElem = ev.target.dataset.id;
  console.log(clickElem);
  //recorremos el array
  for (const group of groups) {
    if(clickElem === group.id){
      //Modificamos el arry
      group.name = "maria";
      console.log(group);
    }
    
  }
  // volvemos a pintar el array modificado
  pintarElem();
}
ul.addEventListener('click',handleClick);