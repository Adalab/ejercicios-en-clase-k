"use strict";

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

export default Animal;