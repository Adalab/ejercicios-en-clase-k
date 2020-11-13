import React from "react";
import "./App.scss";
import Header from "./Header";
import SurveyFunctional from "./SurveyFunctional";

const App = () => {
  return (
    <div className="App">
      <Header number="3.8" lesson="Formularios" title="Encuesta" />
      <main className="container">
        <SurveyFunctional/>
      </main>
    </div>
  );
}

export default App;
