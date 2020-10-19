'use strict';

const form = document.querySelector('.js-form');
const nameInput = document.querySelector('.js-name');
const surnameInput = document.querySelector('.js-surname');
// diagrama de flujo: arranca cuando la usuaria hace un evento
const handleInput = () => {
  // declaro el objeto que quiero guardar en el local storage
  const data = {
    name: nameInput.value,
    surname: surnameInput.value
  };
  // convierto el objeto en string
  const stringData = JSON.stringify(data);
  // guardo el string en el local storage
  localStorage.setItem('userData', stringData);
};

form.addEventListener('keyup', handleInput);
// diagrama de flujo: al arrancar la página
const getFromLocalStorage = () => {
  debugger;
  // leo los datos del local storage en formato string
  const stringUser = localStorage.getItem('userData');
  // parseo de string a objeto
  const user = JSON.parse(stringUser);
  // compruebo si el objeto tiene información útil
  if (user !== null) {
    // si entra por aquí es que NO es la primera vez que entra en la página
    nameInput.value = user.name;
    surnameInput.value = user.surname;
  }
  // else {
  // si entrase por el else es que sería la primera vez que entra en la página
  // }
};
// al arrancar la página leo los datos del local storage
getFromLocalStorage();
