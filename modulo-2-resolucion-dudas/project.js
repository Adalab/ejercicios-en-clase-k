'use strict';

const title = document.querySelector(".title");
const fields = document.querySelector(".fields");

const showFields = function () {
  fields.classList.toggle("visible");
}

title.addEventListener("click", showFields);
