const width = 300;
const padding = 20;
const border = 5;

let totalWidth = width;
totalWidth = totalWidth + padding * 2;
totalWidth = totalWidth + border * 2;

console.log(totalWidth);
debugger;



let a = null;
let b;

const case0 = document.querySelector('.case0 span');
case0.innerHTML = (a == null);

const case1 = document.querySelector(".case1 span");
case1.innerHTML = (a === null);

const case2 = document.querySelector(".case2 span");
case2.innerHTML = (b == undefined);

const case3 = document.querySelector(".case3 span");
case3.innerHTML = (b === undefined);

/* ----- */

const case4 = document.querySelector(".case4 span");
const resultCase4 = (a == undefined);
case4.innerHTML = "" + resultCase4 + (resultCase4 === false ? "" : "!!!");

const case5 = document.querySelector(".case5 span");
const resultCase5 = (b == null);
case5.innerHTML = "" + resultCase5 + (resultCase5 === false ? "" : "!!!");

const case6 = document.querySelector(".case6 span");
case6.innerHTML = '"' + typeof(a) + '"';

const case7 = document.querySelector(".case7 span");
case7.innerHTML = '"' + typeof(b) + '"';
