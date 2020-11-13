import React from "react";
import "./App.scss";
import Header from "./Header";
import Survey from "./Survey";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header number="3.8" lesson="Formularios" title="Encuesta" />
        <main className="container">
          <Survey />
        </main>
      </div>
    );
  }
}

export default App;
