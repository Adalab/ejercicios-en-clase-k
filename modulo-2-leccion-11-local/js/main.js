'use strict';

const adalaber = document.querySelector("input").value;
//console.log(adalaber);
localStorage.setItem("name",adalaber);
localStorage.setItem("age","25");
const name = localStorage.getItem("name");
const data = {
    name : adalaber,
    age: "25"
}
const stringData = JSON.stringify(data);
localStorage.setItem("data",stringData);

const stringAdalaber = localStorage.getItem("data")
const objAdalaber = JSON.parse(stringAdalaber);
console.log(objAdalaber.name, objAdalaber.age);
