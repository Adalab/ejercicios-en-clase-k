"use strict";

const display = document.querySelector(".js-number");
const buttons = document.querySelector(".js-buttons");

let memory;
let oper;

const renderInputs = function () {
  let contenido = "";
  for (let i = 1; i <= 9; i++) {
    //contenido += '<input type="button" id="key' + i + '" class="key js-key js-key' + i + '" value="' + i + '">';
    contenido += `<input type="button" id="key${i}" class="js-key js-key${i}" value="${i}">\n`;
  }
  contenido += `<input type="button" id="key0" class="js-key js-key0" value="0">\n`;
  contenido += `<input type="button" id="keysum" class="key js-key js-keysum" value="+">\n`;
  buttons.innerHTML = contenido;

  addEvents();
};

const addEvents = function () {
  const keysList = document.querySelectorAll(".js-key");

  for (const key of keysList) {
    key.classList.add("key");
    key.addEventListener("click", handleSection);
  }
};

const handleSection = function (event) {
  debugger;
  console.log(event.currentTarget);
  console.log(event.target);

  if (event.target.classList.contains("js-key")) {
    const digit = event.target.value;
    display.value += digit;
  }
};

renderInputs();

//buttons.addEventListener("click", handleSection);

/* const showNumber = function (event) {
  debugger;
  console.log(event.currentTarget);
  const digit = event.currentTarget.value;
  display.value += digit;
} */

/* for (let i = 0; i < keysList.length; i++ ) {
  const keyButton = keysList[i];

  keyButton.addEventListener("click", showNumber);
} */

/* for (const keyButton of keysList) {
  keyButton.addEventListener("click", showNumber);
}
 */
