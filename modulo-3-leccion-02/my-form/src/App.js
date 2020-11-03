import React, { Component } from 'react';
import './App.css';

const cteGlobal = "Patricia";


class App extends Component {

  constructor() {
    super();
    this.email = "ivan@adalab.es";
    this.state = { curso: "Adalab" };
  }

  render() {
    const number = 33;
    const name = "Dayana";

    const inputName = <><label htmlFor="name">Nombre:</label>
                      <input type="text" id="name" value={name.toUpperCase()} /></>;

    const lista = [
      <div>3</div>,
      <div>5</div>,
      <div>6</div>
    ];
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="header__title">Encuestas online</h1>
        </header>
        <main>
          <section className="lista">
            {lista}
          </section>
          <section className="content">
            {number}
            <form className="form">
              {inputName}
              <label htmlFor="phone">Teléfono</label>
              <input type="text" id="phone" placeholder={number} />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder={this.email} />
            </form>
          </section>
          {cteGlobal}
        </main>
      </div>
    );
  }
}

export default App;
