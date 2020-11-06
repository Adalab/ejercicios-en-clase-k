import React from "react";
import "./App.scss";

/*
Esta función la meto dentro de la clase, porque está mejor ubicada ahí
ya que es una acción relacionada con el HTML que está renderizando la clase.

function openLink(ev) {
  //window.location = "https://github.com/Adalab/ejercicios-en-clase-k/";
  window.open("https://github.com/Adalab/ejercicios-en-clase-k/");
}
*/
class App extends React.Component {
  constructor(props) {
    super(props);

    // Está línea siempre debe ir cuando usemos una función/método
    // para atender un evento. Y pondremos una línea por cada método
    // que usemos (en este caso sólo es uno)

    this.openLink = this.openLink.bind(this);
  }
  openLink(ev) {
    window.open("https://github.com/Adalab/ejercicios-en-clase-k/");
  }
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="header__title">3.5 Eventos: Botón enlace</h1>
          <a
            className="header__logo"
            href="https://github.com/Adalab/ejercicios-en-clase-k/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/Adalab/resources/master/images/adalab-logo-32x32.png"
              alt="Adalab logo"
            />
            <span className="hidden">Ir al repo</span>
          </a>
        </header>
        <main className="container">

          
            <p>
              Quiero simular en este botón el mismo comportamiento que tienen el enlace &lt;a&gt;
            del &lt;header&gt; y para que haga lo mismo (abrir otra pestaña) tengo que darle
            las instrucciones desde JavaScript.
            </p>
          

          <button className="linkButton" onClick={this.openLink} title="Ir el repo en GitHub">
            <img
              src="https://raw.githubusercontent.com/Adalab/resources/master/images/adalab-logo-32x32.png"
              alt="Adalab logo"
            />
            <br />
            <span>Ir al repo</span>
          </button>
        </main>
      </div>
    );
  }
}

export default App;
