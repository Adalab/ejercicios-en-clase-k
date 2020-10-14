'use strict';

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const numberRandom = getRandomNumber(100);
console.log(numberRandom);

const btn = document.querySelector(".js-btn");
const inputNumber = document.querySelector(".js-number");
const msj = document.querySelector(".js-msj");
const msjCounter = document.querySelector(".js-count");

function  magicNumber(){
    let inputValue = parseInt(inputNumber.value);
    if (inputValue <0  || inputValue >= 100 ) {
        console.log("debe ser un numero de 0 a 100");
        msj.innerHTML = "debe ser un numero de 0 a 100";
    }
    else if (inputValue < numberRandom ){
            msj.innerHTML = "bajo";
            console.log("bajo")
        }
    else if (inputValue > numberRandom){
            msj.innerHTML = "alto";
            console.log("alto")
        }
    else if (inputValue === numberRandom){
            msj.innerHTML = "ganadora";
            console.log("Ganadora")
        }
     counter();
}
let counterclick = 0;

function counter(){
    counterclick++;
    msjCounter.innerHTML =   counterclick;
}
btn.addEventListener("click",magicNumber)

