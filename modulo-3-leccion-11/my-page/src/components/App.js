import React from "react";
import "./App.scss";
import Header from "./Header";
import { Switch, Route, Link } from 'react-router-dom';
import Landing from './Landing';
import Blog from "./Blog";
import Home from "./Home";
import Categories from "./Categories";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const value = ev.currentTarget.value;
    this.setState({
      nombre: value
    })
  }

  render() {
    return (
      <div className="App">
        <Header number="3.11" lesson="React Router" title="My page" />
        <main className="container">
          <Switch>
            <Route exact path="/">
              <Landing handleChange={this.handleChange} />
            </Route>
            <Route exact path="/home" component={Home} />
            <Route path="/blog/categories" component={Categories} />
            <Route path="/blog/tags" component={Blog} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;