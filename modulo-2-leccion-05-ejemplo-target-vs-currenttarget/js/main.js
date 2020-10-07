"use strict";

const container = document.querySelector(".js-container");
const linkAdalab = document.querySelector(".js-link-adalab");
const linkGoogle = document.querySelector(".js-link-google");

// container

const handleContainerClick = (ev) => {
  // el elemento pulsado y escuchado NO es el mismo porque NO estamos escuchando el link, sino el container
  console.log("handleContainerClick: el elemento pulsado es", ev.target);
  console.log(
    "handleContainerClick: el elemento escuchado es",
    ev.currentTarget
  );
  ev.preventDefault();
};

linkAdalab.addEventListener("click", handleContainerClick);
