import React from "react";
import "./App.scss";
import Encuesta from "./Encuesta";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header number="3.9" lesson="Buenas prácticas + Formularios" title="Encuesta" />
        <main className="container">
          <Encuesta />
        </main>
      </div>
    );
  }
}

export default App;
