import React from 'react';
import './App.scss';
import ShowButton from './ShowButton';

class App extends React.Component {
  constructor(props) {
    super(props);

/*     this.articleClass = "shown";
    this.buttonText = "Ocultar"; */
    this.state = {
      articleClass: "shown",
      buttonText: "Ocultar"
    };

    this.handleClickButton = this.handleClickButton.bind(this);
  }
  handleClickButton() {
    console.log("Has hecho click. Pero esto lo escribo en la madre");
    // Ocultar articulo
/*     if (this.articleClass === "shown") {
      this.articleClass = "hidden";
      this.buttonText = "Mostrar";
    }
    else {
      this.articleClass = "shown";
      this.buttonText = "Ocultar";
    }
    this.forceUpdate(); // No usar*/

    // Hago la misma estructura de if pero con setState()
    // Y usamos setState() para evitar el uso de forceUpdate()

    if (this.state.articleClass === "shown") {
      this.setState({
        articleClass: "hidden",
        buttonText: "Mostrar"
      });
    }
    else {
      this.setState({
        articleClass: "shown",
        buttonText: "Ocultar"
      });

    }
  }
  render() {
    
    return (
      <div className="App">
        <header className="header">
          <h1 className="header__title">3.5 Eventos: Botón para mostrar artículo</h1>
          <h2 className="header__subtitle">Ahora, ¡con this.state!</h2>
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
          <ShowButton text={this.state.buttonText} handleClick={this.handleClickButton} />

          <article className={"article " + this.state.articleClass}>
            <h2 className="article__title">Kizzmekia Corbett</h2>
            <h4 className="article__subtitle">From Wikipedia, the free encyclopedia</h4>
            <section className="article__content">
              <p className="article__content--paragraph">
                Kizzmekia "Kizzy" Shanta Corbett (born January 26, 1986) is an American viral immunologist at the
                Vaccine Research Center (VRC) at the National Institute of Allergy and Infectious Diseases, National
                Institutes of Health (NIAID NIH) based in Bethesda, Maryland. Appointed to the VRC in 2014, she is
                currently the scientific lead of the VRC's Coronavirus Team, with research efforts aimed at propelling
                novel coronavirus vaccines, including a COVID-19 vaccine.
              </p>
            </section>
          </article>
        </main>
      </div>
    );
  }
}

export default App;
