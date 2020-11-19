import React from "react";
import "./App.scss";
import Filters from "./Filters";
import Header from "./Header";
import UserList from "./UserList";
import { fetchData } from "../services/getData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listAll: [],
      list: [] /* lista Filtrada */,
      nameFilter: "",
      genderFilter: "all",
      locationFilter: [],
      cityList: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    fetchData().then((cleanData) => {
      const cityList = cleanData.map((personData) => personData.city );

      this.setState({
        listAll: cleanData,
        list: cleanData,
        cityList: cityList,
      });
    });


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
    const allList = this.state.listAll;
    const listFilter = allList
      .filter((personData) =>
        personData.name.toUpperCase().includes(this.state.nameFilter.toUpperCase())
      )
      .filter((personData) =>
        this.state.genderFilter === "all" || personData.gender === this.state.genderFilter)
      .filter((personData) => this.state.locationFilter.length === 0 || this.state.locationFilter.includes(personData.city));

    this.setState({
      list: listFilter,
    });
  }

  render() {
    return (
      <div className="App">
        <Header number="3.10" lesson="Arquitectura" title="LinkedIn" />
        <main className="container">
          <Filters handleFilter={this.handleFilter} cities={this.state.cityList} />
          <UserList list={this.state.list} />
        </main>
      </div>
    );
  }
}

export default App;
