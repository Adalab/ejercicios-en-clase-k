"use strict";
const ages = [32, 25, 63, 95, 87];
const lon = ages.length;
let total = 0;

/*
for (const age of ages) {
  total = total + age;
}
const avg = total / lon;
console.log(avg);*/
let i;
/*
for (i = 0; i < ages.length; i++) {
  console.log("voy por la vuelta " + i + " y el valor es " + ages[i]);
}
*/
let j;

for (j = ages.length - 1; j >= 0; j--) {
  console.log("voy por la vuelta " + j + " y el valor es " + ages[j]);
}
console.log(j);
