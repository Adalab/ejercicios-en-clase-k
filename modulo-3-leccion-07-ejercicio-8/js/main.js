"use strict";
const buttons = document.querySelectorAll(".btn");
const body = document.querySelector("body");

console.log(buttons);
function changeBack() {
  body.classList.toggle("alert");
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", changeBack);
}
