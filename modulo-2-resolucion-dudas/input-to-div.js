'use strict';

function functBelen() {

}

const copyData = function() {
  const inputData = document.querySelector(".js-data");
  const divResult = document.querySelector(".result");

  const data = inputData.value;

  divResult.innerHTML += data;
}

const funcGuays = () => {

}

const btnRun = document.querySelector(".js-run");

btnRun.addEventListener("click", copyData);

let a = 5;
a += 1;  // a++;
a -= 1;  // a--;
a += 10;

let texto = "Hola ";

texto += "Marina";

// list[]
// obj.