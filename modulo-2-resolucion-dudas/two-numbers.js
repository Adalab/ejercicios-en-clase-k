'use strict';

const checkDates = function (event) {
  const inputStart = document.querySelector('.js-start');
  const inputEnd = document.querySelector(".js-end");
  const divResult = document.querySelector(".result");
  const spanMessge = document.querySelector(".js-message");


  const startDay = parseInt( inputStart.value );
  const endDay = parseInt( inputEnd.value );

  if (startDay < endDay) {
    // Las fechas están bien
    spanMessge.innerHTML = "TOOODO OK";

    if (divResult.classList.contains("error")) {
      // Primera condicion se cumple y segunda también
      divResult.classList.remove("error");
    }

    divResult.classList.add("success");

  } else {
    spanMessge.innerHTML = "Error en las fechas. Compruébalo.";

    if (divResult.classList.contains("success")) {
      // Primera condición no se cumple y segunda sí
      divResult.classList.remove("success");
    }

    divResult.classList.add("error");

  }

  event.preventDefault();
}

const btnCheck = document.querySelector(".js-action");

btnCheck.addEventListener("click",checkDates);