"use strict";
const face = document.querySelector(".js-face");
const btn = document.querySelector(".js-button");
const select = document.querySelector(".js-select");
const container = document.querySelector(".js-container");

const getRandom = function () {
  const random = parseInt(Math.random() * 100);
  return random;
};
function updateclick() {
  const selectValue = select.value;
  face.innerHTML = selectValue;
  const random = getRandom();
  console.log(random);
  if (random % 2 === 1) {
    container.classList.add("fire-color");
  } else {
    container.classList.remove("fire-color");
  }
}

btn.addEventListener("click", updateclick);
