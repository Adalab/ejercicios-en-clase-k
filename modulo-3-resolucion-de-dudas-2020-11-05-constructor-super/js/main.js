'use strict';

class User {
  constructor(name, email) {
    // atributos personalizados
    this.name = name;
    this.email = email;
    // atributos por defecto
    this.isAdmin = false;
  }

  printUserInfo() {
    console.log(
      `La persona ${this.name} con email ${this.email} es administradora ${this.isAdmin}`
    );
  }
}

class Admin extends User {
  constructor(name) {
    const email = name + '@gmail.com';
    // el super es como si creara una instancia de User >>> const this = new User(name, email)
    super(name, email);
    // atributos por defecto
    this.isAdmin = true;
  }
}

const maricarmen = new User('Maricarmen', 'lamari@gmail.com');
maricarmen.printUserInfo();

const admin = new Admin('Lucía');
admin.printUserInfo();
