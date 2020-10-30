"use strict";

import Animal from './Animal.js';

class Cat extends Animal {
  constructor(age, name) {
    super(age, 4);
    this.name = name; /* La de cat */
  }

  renderAnimal() {
    super.renderAnimal();
    const state = document.querySelector(".js-state");
    state.innerHTML += `<br />Name: ${this.name}`;
  }

  roar() {
    const imageContainer = document.querySelector(".js-image");
    imageContainer.src = "https://media1.tenor.com/images/e2e2b34a92104c8c545e3dabb4ebaffa/tenor.gif?itemid=15745519";
    imageContainer.classList.remove("hidden");

    setTimeout(() => {
      imageContainer.classList.add("hidden");
    }, 2000);
  }

  purrr() {}
}

export default Cat;