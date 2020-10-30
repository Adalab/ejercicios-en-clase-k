'use strict';

class Animal {
  constructor(age, legs) {
    this.state = "asleep";
    this.age = age;
    this.legs = legs;
  }

  renderAnimal() {
    const state = document.querySelector(".js-state");
    state.innerHTML = `State: ${this.state}<br/>Age: ${this.age}<br/>Legs: ${this.legs}`;
  }

  wakeup() {
    this.state = "awake";
  }

  gotobed() {
    this.state = "asleep";
  }
}

class Cat extends Animal {
  constructor(age, name) {
    super(age, 4);
    this.name = name;  /* La de cat */
  }
/*
  constructor(age, legs) {
    this.state, this.age, this.legs
  }
  renderAnimal() {  ... }
  wakeup() { ... }
  gotobed() { ... ]
*/
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
  
  purrr() {

  }
}

function init() {
  const firstAnimal = new Animal(22, 4);
  const secondAnimal = new Animal(2, 4);

/*   firstAnimal.renderAnimal(); */

  const wiskas = new Cat(15, "Wiskas");

  wiskas.renderAnimal();

  
  const wakeupButton = document.querySelector('.js-wakeup');
  wakeupButton.addEventListener("click", () => {
    firstAnimal.wakeup();
    firstAnimal.renderAnimal();
  });
  
  const sleepButton = document.querySelector(".js-sleep");
  sleepButton.addEventListener("click", () => {
    firstAnimal.gotobed();
    firstAnimal.renderAnimal();
  });

  const roarButton = document.querySelector(".js-roar");
  roarButton.addEventListener("click", () => {
    wiskas.roar();
  });

  console.log(firstAnimal);
}

init();