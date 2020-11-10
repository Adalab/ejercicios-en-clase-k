import React from "react";
import "./App.scss";
import Clock from "./Clock";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header number="2.6" lesson="Estado" title="Reloj" subtitle="Cambiando el estado" />
        <main className="container">
          <Clock/>
        </main>
      </div>
    );
  }
}

export default App;
