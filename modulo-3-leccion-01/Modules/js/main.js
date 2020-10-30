'use strict';

import Cat from './Cat.js';

function init() {
  const wiskas = new Cat(15, "Wiskas");

  wiskas.renderAnimal();

  const wakeupButton = document.querySelector(".js-wakeup");
  wakeupButton.addEventListener("click", () => {
    wiskas.wakeup();
    wiskas.renderAnimal();
  });

  const sleepButton = document.querySelector(".js-sleep");
  sleepButton.addEventListener("click", () => {
    wiskas.gotobed();
    wiskas.renderAnimal();
  });

  const roarButton = document.querySelector(".js-roar");
  roarButton.addEventListener("click", () => {
    wiskas.roar();
  });
}

init();