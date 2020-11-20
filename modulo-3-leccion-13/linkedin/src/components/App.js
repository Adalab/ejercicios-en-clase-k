import React from "react";
import { Switch, Route, withRouter } from 'react-router-dom';
import "./App.scss";
import Filters from "./Filters";
import Header from "./Header";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
import ModalFunctional from "./ModalFunctional";
import { fetchData } from "../services/getData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [] /* lista Filtrada */,
      nameFilter: "",
      genderFilter: "all",
      locationFilter: [],
    };

    this.listAll = [];

    this.handleFilter = this.handleFilter.bind(this);
    this.renderUserDetail = this.renderUserDetail.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    fetchData().then((cleanData) => {
      this.listAll = cleanData;

      this.setState({
        list: cleanData,
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
    } else if (id === "gender") {
      this.setState(
        {
          genderFilter: value,
        },
        () => {
          this.filterData();
        }
      );
    } else if (id === "location") {
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
      } else {
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
  }

  filterData() {
    // Codigo
    const allList = this.listAll;
    const listFilter = allList
      .filter((personData) => personData.name.toUpperCase().includes(this.state.nameFilter.toUpperCase()))
      .filter((personData) => this.state.genderFilter === "all" || personData.gender === this.state.genderFilter)
      .filter(
        (personData) => this.state.locationFilter.length === 0 || this.state.locationFilter.includes(personData.city)
      );

    this.setState({
      list: listFilter,
    });
  }

  closeModal() {
    this.props.history.push("/");
  }

  renderUserDetail(props) {
    const dataObj = this.state.list.find((personData) => personData.username === props.match.params.username);
    console.log(props);
    if (dataObj) {
      return (
        <ModalFunctional handleClose={this.closeModal}>
          <UserDetail data={dataObj} />
        </ModalFunctional>
      );
    }
    else {
      return (
        <ModalFunctional handleClose={this.closeModal}>
          <h2>No hay datos</h2>
          <p>Has recagado la página y han desaparecido todos</p>
        </ModalFunctional>
      );
    }
  }

  render() {
    const cityList = this.listAll.map((personData) => personData.city);

    return (
      <div className="App">
        <Header number="3.10" lesson="Arquitectura" title="LinkedIn" />
        <main className="container">
          <Filters handleFilter={this.handleFilter} cities={cityList} />
          <UserList list={this.state.list} />
          <Switch>
            <Route path="/:username" render={this.renderUserDetail} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(App);
