'use script';

const number = 0;

const boolNumber = !number;  // truthy -> false

const boolDouble = !!number; // truthy -> false -> true;

if (1 != 1) {
  console.log();
}




const inputNumber = document.querySelector(".data");
const data = inputNumber.value;


const hasPuppies = !!data; // true data!= 0 | false data == 0