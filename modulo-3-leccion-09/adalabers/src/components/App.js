import React from "react";
import "./App.scss";
import Header from "./Header";
import Filter from "./Filter";
import AdalabersList from "./AdalabersList";
import adalabersData from "../data/adalabers.json";

class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      textSearch: "",
      list: adalabersData,
    };

    this.changeTextSearch = this.changeTextSearch.bind(this);
  }

  changeTextSearch(ev) {
    const newValue = ev.currentTarget.value;
    const newValueUpperCase = newValue.toUpperCase();

    const listFiltered = adalabersData.filter((person) => person.fullname.toUpperCase().includes(newValueUpperCase));

    this.setState({
      textSearch: newValue,
      list: listFiltered,
    });
  }

  render() {
    return (
      <div className="App">
        <Header number="3.9" lesson="Buenas prácticas" title="Adalabers" subtitle="With Dolby Surround" />
        <main className="container">
          <Filter textValue={this.state.textSearch} handleChange={this.changeTextSearch} />
          <AdalabersList list={this.state.list}></AdalabersList>
        </main>
      </div>
    );
  }
}

export default App;
