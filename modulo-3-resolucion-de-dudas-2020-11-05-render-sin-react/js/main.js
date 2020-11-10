'use strict';

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  render() {
    const container = document.querySelector('.container');
    container.innerHTML = '<p>Pinto algo</p>';
  }
}

const maricarmen = new User('Maricarmen', 'lamari@gmail.com');

maricarmen.render();
