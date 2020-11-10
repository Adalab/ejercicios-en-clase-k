import React from "react";
import "./App.scss";
import Header from "./Header";
import ResultJson from "./ResultJson";
import Select from "./Select";
import Text from "./Text";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Probando...",
      list: [],
    };

    this.changeSelect = this.changeSelect.bind(this);
    this.changeInputText = this.changeInputText.bind(this);
  }

  changeSelect(newData) {
    console.log("Desde App!");

    /*  this.setState({
      number: newData,
    }); */

    /* this.setState({
      list: [...this.state.list, newData], //this.state.list + newData,
    }); */

    this.setState((oldState) => {
      return {
        list: [...oldState.list, newData]
      }
    });
  }

  changeInputText(newData) {
    console.log("Desde App!");

    this.setState({
      list: [...this.state.list, newData], 
    });

    /* this.setState(
      {
        name: newData,
      }
    ); */
  }

  render() {
    //const result = {text: "Probando..."};

    return (
      <div className="App">
        <Header number="2.6" lesson="Estado" title="Formulario" subtitle="Con JSON!" />
        <main className="container">
          <section className="form">
            <Select id="number" text="Escoge un número" handleChange={this.changeSelect} />

            <Text id="name" text="Escribe tu nombre" placeholder="Kizzy" handleBlur={this.changeInputText} />
          </section>

          <ResultJson result={this.state} />
        </main>
      </div>
    );
  }
}

export default App;
