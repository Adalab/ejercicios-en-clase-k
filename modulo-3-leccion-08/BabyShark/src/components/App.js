import React from "react";
import "./App.scss";
import GrandmaShark from "./GrandmaShark";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header number="2.7" lesson="Hooks" title="Xxx" subtitle="Xxx" />
        <main className="container">
          <GrandmaShark/>
        </main>
      </div>
    );
  }
}

export default App;
