"use strict";
const inputPassword = document.querySelector(".js-input-password");
const inputEmail = document.querySelector(".js-input-email");
const formData = {};
function setFormData(ev) {
  const inputName = ev.currentTarget.name;
  const inputValue = ev.currentTarget.value;

  console.log(inputName, inputValue);
  formData[inputName] = inputValue;
  formData["paragraph"] = function () {
    document.querySelector(".js-msj").innerHTML = "soy un P";
    console.log("llamamos al metodo");
  };
  console.log("objeto ", formData);
  console.log("Email ", formData.email);
  console.log("Pass", formData.password);
  formData.paragraph();
}
inputEmail.addEventListener("blur", setFormData);
inputPassword.addEventListener("blur", setFormData);
