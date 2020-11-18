import React, { useState } from "react";
import "./App.scss";
import Header from "./Header";
import Landing from "./Landing";
import ArticleClass from "./ArticleClass";
import ArticleFunctional from "./ArticleFunctional";
import { Switch, Route } from "react-router-dom";
import ARTICLE_LIST from "../data/articles.json";

const App = () => {
  const [list] = useState(ARTICLE_LIST);

  const renderLanding = () => {
    return <Landing list={list} />;
  };

  const renderArticle = (props) => {
    console.log(props.match.params);

    const articleId = parseInt(props.match.params.id);
    const articleData = ARTICLE_LIST.find((article) => article.id === articleId);

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
{/* La ruta puede ser (porque lo decido yo)
                         /article/1
                         /article/2
          y el :id recogerá el 1,2
*/}
          <Route path="/article/:id" render={renderArticle} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
