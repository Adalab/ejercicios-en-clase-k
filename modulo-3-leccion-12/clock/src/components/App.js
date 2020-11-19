import React from "react";
import "./App.scss";
import Header from "./Header";
import ClockClass from "./ClockClass";
import ClockFunctional from "./ClockFunctional";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Init state
    // bind

    this.state = {
      clockVisibility: "show",
    };

    this.toggleShowClock = this.toggleShowClock.bind(this);
  }

  componentDidMount() {
    // Sólo después del primer render
    // fetch.GET <- (traer datos)
    // setInterval
  }
  componentDidUpdate() {
    // Después de cada render sucesivo
    // Animaciones
    // Guardar datos (localStorage, fetch.POST -> servidor)
    // Enlazar con 3rd libraries
  }
  componentWillUnmount() {
    // clearInterval
    // Guardar en localStorage?
  }

  toggleShowClock(ev) {
    const checked = ev.currentTarget.checked;

    if (checked) {
      this.setState({
        clockVisibility: "show",
      });
    } else {
      this.setState({
        clockVisibility: "hidden",
      });
    }
  }

  render() {
    // return HTML

    return (
      <div className="App">
        <Header number="3.12" lesson="Ciclo de vida" title="Reloj" subtitle="Ahora con vida!" />
        <main className="container">
          {this.state.clockVisibility === "show" ? <ClockFunctional /> : null}

          <div className="settings">
            <input
              type="checkbox"
              name="showClock"
              id="showClock"
              checked={this.state.clockVisibility === "show"}
              onChange={this.toggleShowClock}
            />
            <label htmlFor="showClock">Mostrar reloj</label>
          </div>
        </main>
      </div>
    );
  }
}

export default App;