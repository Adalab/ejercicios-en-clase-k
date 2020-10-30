"use strict";

/*const d1 = {
  "firstname":"Dayana",
  "lastname":"Romero",
  "address":"Avenda de...",
  "phone":"555030303"
}
const d2 = {
  "firstname":"Miguel",
  "lastname":"del Mazo",
  "address":"Calle de..",
  "phone":"55550404040"
} */

class Person {
  constructor(fn, ln, ad, ph = "[No indicado]") {
    this.firstname = fn;
    this.lastname = ln;
    this.address = ad;
    this.phone = ph;
    // let variableLocal = "";
  }

  getGender() {
    if (this.firstname === "Dayana") {
      return "Female";
    } else if (this.fistname === "Miguel") {
      return "Male";
    }
  }

  getFullName() {
    let fn = this.firstname + " " + this.lastname;
  }
}

function init() {
  const objDayana = new Person("Dayana", "Romero");

  objDayana.phone = "555282828";

  console.log(objDayana.getGender()); // --> "Female"
  console.log(objDayana.getFullName());

  const objMiguel = new Person();

  objMiguel.firstname = "Miguel";

  console.log(objMiguel.getGender()); // --> "Male"
}

init();
