import React from "react";
import "./App.scss";
import Filters from "./Filters";
import Header from "./Header";
import UserList from "./UserList";
import { fetchData, getCities } from "../services/getData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: fetchData(),
      nameFilter: "",
      genderFilter: "all",
      locationFilter: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(data) {
    /*
    data.id
    data.value
    data.check
    */
    
    console.log(data);
    const { id, value } = data;
    if (id === "name") {
      this.setState(
        {
        nameFilter: value,
        },
        () => {
          this.filterData();
        }
      );
    }
    else if (id === "gender") {
      this.setState(
        {
          genderFilter: value,
        },
        () => {
          this.filterData();
        }
      );
    }
    else if (id === "location") {
      const { checked } = data;

      if (checked) {
        // Se ha quedado marcado
        const newLocationFilter = [...this.state.locationFilter, value];
        this.setState(
          {
            locationFilter: newLocationFilter,
          },
          () => {
            this.filterData();
          }
        );
      }
      else {
        // Se ha desmarcado
        const newLocationFilter = this.state.locationFilter.filter((city) => city !== value);
        this.setState(
          {
            locationFilter: newLocationFilter,
          },
          () => {
            this.filterData();
          }
        );
      }

      
    }

  };

  filterData() {
    // Codigo
    const allList = fetchData();
    const listFilter = allList
      .filter((personData) =>
        personData.name.toUpperCase().includes(this.state.nameFilter.toUpperCase())
      )
      .filter((personData) =>
        this.state.genderFilter === "all" || personData.gender === this.state.genderFilter)
      .filter((personData) => this.state.locationFilter.includes(personData.city));

    this.setState({
      list: listFilter,
    });
  }

  render() {
    return (
      <div className="App">
        <Header number="3.10" lesson="Arquitectura" title="LinkedIn" />
        <main className="container">
          <Filters handleFilter={this.handleFilter} cities={getCities()} />
          <UserList list={this.state.list} />
        </main>
      </div>
    );
  }
}

export default App;
