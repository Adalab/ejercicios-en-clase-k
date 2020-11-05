import React from 'react';
import './App.scss';
import Right from './Right';
import Left from './Left';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="header__title">Cosas distribuidas</h1>
        </header>
        <main className="container">
          <Right>
            <article>
              <h2>A la izquierda</h2>
              <p>
                Nemo dolorem doloremque eligendi neque voluptatum. Illo sed quia ea numquam. Quibusdam molestiae quis
                atque nihil. Nisi recusandae laudantium laborum. Tenetur ducimus rem. Consequatur eos nisi incidunt
                distinctio fugiat voluptas praesentium dolores ab.
              </p>
            </article>
          </Right>
          <Left>
            <article>
              <h2>A la derecha</h2>
              <p>
                Nemo dolorem doloremque eligendi neque voluptatum. Illo sed quia ea numquam. Quibusdam molestiae quis
                atque nihil. Nisi recusandae laudantium laborum. Tenetur ducimus rem. Consequatur eos nisi incidunt
                distinctio fugiat voluptas praesentium dolores ab.
              </p>
            </article>
          </Left>
        </main>
      </div>
    );
  }
}

export default App;
