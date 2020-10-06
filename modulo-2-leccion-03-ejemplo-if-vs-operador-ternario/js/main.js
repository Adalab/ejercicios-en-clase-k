"use strict";

const age = document.querySelector(".js-age");
const resultIf = document.querySelector(".js-result-if");
const resultTernaryOperator = document.querySelector(
  ".js-result-ternary-operator"
);

const showMessage = function () {
  const ageValue = parseInt(age.value);

  // este if es equivalente al operador ternario que hay a continuación
  if (ageValue >= 18) {
    resultIf.innerHTML = "Anda pasa!!!";
  } else {
    resultIf.innerHTML = "Ja ja ja, espera unos añitos!!!";
  }
  // aquí podemos usar el operador ternario porque:
  // - tanto el if como el else devuelven un valor que queremos asignar a la misma variable
  //   - si quisieramos asignar el valor a diferentes variables ya no nos valdría el operador ternario
  // - solo hacemos una operación dentro del if y una dentro del else
  //   - si quisieramos hacer varias operaciones dentro del if o dentro del else ya no nos valdría el operador ternario
  resultTernaryOperator.innerHTML =
    ageValue >= 18 ? "Anda pasa!!!" : "Ja ja ja, espera unos añitos!!!";
  //const hola = ageValue >= 20 ? "adelante" : "no puede";
  //console.log(hola);
};

age.addEventListener("change", showMessage);
