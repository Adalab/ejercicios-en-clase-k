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

// función que maneja los clicks
const handleClick = function (ev) {
  // pintamos el objeto dataset
  console.log(ev.target.dataset);
  console.log(ev.target.dataset.id);
  console.log(ev.target.dataset.isfav);
  // gracias al objeto dataset podemos guardar en el DOM datos sin que sean visibles para el usuario

  // buscamos
  const clickedId = ev.currentTarget.dataset.id;
  for (const group of groups) {
    if (clickedId === group.id) {
      console.log('El elmento clickado es:', group);
      group.isFav = !group.isFav;
      console.log('El elmento clickado es:', group);
    }
  }

  // repintamos y escuchamos
  paintGroups();
  listenEvents();
};

// pintamos los elementos en el dom
function paintGroups() {
  const listItem = document.querySelector('.js-list');
  let htmlCode = '';
  for (const group of groups) {
    // recorremos el array para generar el código html que vamos a meter en el <ul />
    htmlCode += `<li class="js-group" data-id="${group.id}" data-isFav="${group.isFav}">`;
    htmlCode += `<p>${group.name}: `;
    htmlCode += `<span>${group.isFav ? 'Favorito' : 'No favorito'}</span>`;
    htmlCode += `</p>`;
    htmlCode += `</li>`;
  }
  listItem.innerHTML = htmlCode;
}

// función que escucha los clicks
function listenEvents() {
  const groupsElements = document.querySelectorAll('.js-group');
  for (const groupElement of groupsElements) {
    // recorremos los <li /> creados en la parte de pintado y les añadimos un addEventListener
    groupElement.addEventListener('click', handleClick);
  }
}

// arranco la aplicación pintando y escuchando eventos
paintGroups();
listenEvents();
