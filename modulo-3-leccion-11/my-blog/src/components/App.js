import React, { useState } from "react";
import "./App.scss";
import Header from "./Header";
import Landing from "./Landing";
import ArticleClass from "./ArticleClass";
import ArticleFunctional from "./ArticleFunctional";
import { Switch, Route } from "react-router-dom";
import ARTICLE_LIST from "../data/articles.json";

const App = () => {
  const [list, setList] = useState(ARTICLE_LIST);

  const renderLanding = () => {
    return <Landing list={list} />;
  };

  const renderArticle = (props) => {
    const articleId = parseInt(props.match.params.name);
    const articleData = ARTICLE_LIST.find((article) => article.id === articleId);

    console.log(props.match.params.name);

    return <ArticleFunctional data={articleData} {...props} />;
  };

  return (
    <div className="App">
      <Header number="3.11" lesson="React Router" title="Wikipedia" />
      <main className="container">
        <Switch>
          {/* <Route exact path="/" render={renderLanding} /> */}
          <Route exact path="/">
            <Landing list={list} />
          </Route>
          <Route path="/article/:name" render={renderArticle} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
