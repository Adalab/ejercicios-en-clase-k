import React from 'react';
import './App.scss';
import MainMenu from './MainMenu';
import Clock from './widgets/Clock';
import Counter from "./widgets/Counter";
import Comment from "./Comment";
import ArticleContent from "./ArticleContent";

class App extends React.Component {

  render() {
    const styleForTitle = "article__title";
    const articleTitle = "Kizzmekia Corbett";


    return (
      <div className="App">
        <header className="header">
          <h1 className="header__title">Intro a React: Blog</h1>
        </header>
        <main>
          <div className="topBanner">
            <MainMenu></MainMenu>

            <div className="widgets">
              <Counter></Counter>
              <Clock></Clock>
            </div>
          </div>
          <article className="article">
            <ArticleContent
              title={articleTitle}
              subtitle="From Wikipedia, the free encyclopedia"
              styleClass={styleForTitle}
              styleH4="article__paragraph--title"
            ></ArticleContent>
            <section className="article__comments">
              <h3 className="article__comments--title">Comentarios:</h3>

              <Comment author="Iván" message="Wow! Qué mujer!" nestedAuthor="Miguel"></Comment>

              <div className="article__comment">
                <div className="article__comment--from">De: Iván</div>
                <div className="article__comment--message">Wow! Qué mujer!</div>
                <div className="article__comment--replies">
                  {/* <div className="article__comment">
                    <div className="article__comment--from">De: Miguel</div>
                    <div className="article__comment--message">Ya te digo, Rodrigo</div>
                    <div className="article__comment--replies"></div>
                  </div> */}
                  <Comment author="Miguel" message="Ya te digo, Rodrigo"></Comment>
                </div>
              </div>
              <Comment author="Dayana" message="Pura inspiración"></Comment>
            </section>
          </article>
        </main>
      </div>
    );
  }
}

export default App;
