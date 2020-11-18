import React from "react";
import "./App.scss";
import Header from "./Header";
import Landing from "./Landing";
import ArticleClass from "./ArticleClass";
import ArticleFunctional from "./ArticleFunctional";
import { Switch, Route } from 'react-router-dom';
import ARTICLE_LIST from "../data/articles.json";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ARTICLE_LIST,
    };

    this.renderLanding = this.renderLanding.bind(this);
    this.renderArticle = this.renderArticle.bind(this);
  }

  renderLanding() {
    return (<Landing list={this.state.list} />);
  }

  renderArticle(props) {
    const articleId = parseInt( props.match.params.name );
    const articleData = ARTICLE_LIST.find((article)=>article.id===articleId);

    console.log(props.match.params.name);

    return <ArticleFunctional data={articleData} {...props} />;
  }

  render() {
    return (
      <div className="App">
        <Header number="3.11" lesson="React Router" title="Wikipedia" />
        <main className="container">
          <Switch>
            {/* <Route exact path="/" render={this.renderLanding} /> */}
            <Route exact path="/">
              <Landing list={this.state.list} />
            </Route>
            <Route path="/article/:name" render={this.renderArticle} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;