import React from "react";
import "./App.scss";
import Filters from "./Filters";
import Header from "./Header";
import ProfilesFullList from "../data/profiles.json";
import UserList from "./UserList";

class App extends React.Component {
  render() {

    const handleFilter = () => { };

    return (
      <div className="App">
        <Header number="3.10" lesson="Arquitectura" title="LinkedIn" />
        <main className="container">
          <Filters handleFilter={handleFilter} />
          <UserList list={ProfilesFullList} />
        </main>
      </div>
    );
  }
}

export default App;
