'use strict';

const item = document.querySelector('.js-item');

function handleItemClick(ev) {
  console.log('Han pulsado el botón');
  console.log('Han pulsado el botón con esta información', ev);
  console.log('El link debería navegar a', ev.target.href);
  // prevenimos la acción por defecto del link
  // que es navegar a la página que haya en el href
  ev.preventDefault();
  // prueba a comentar la línea anterior a ver qué pasa
}

// escuchamos un evento click
// en el elemento item y
// la encargada de gestionar el evento es la función handleItemClick
item.addEventListener('click', handleItemClick);
