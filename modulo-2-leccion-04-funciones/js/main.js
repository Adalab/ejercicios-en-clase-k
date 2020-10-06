"use strict";

function getIva(price) {
  const iva = price * 0.21;
  const total = price + iva;
  const texto = `el precio es ${price} el iva es ${iva} el total es ${total} `;
  return texto;
}
const paragraph = document.querySelector(".js-text");
paragraph.innerHTML = getIva(100);

const getIvaAnonymous = function (price) {
  const iva = price * 0.21;
  const total = price + iva;
  const texto = `el precio es ${price} el iva es ${iva} el totaºl es ${total} `;
  return texto;
};
console.log("anonima " + getIvaAnonymous(50));

const getIvaArrow = (price) => {
  const iva = price * 0.21;
  const total = price + iva;
  const texto = `el precio es ${price} el iva es ${iva} el total es ${total} `;
  return texto;
};
console.log("Arrow " + getIvaArrow(50));
