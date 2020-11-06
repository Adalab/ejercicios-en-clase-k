import React from "react";
import "./App.scss";
import ModalClass from "./ModalClass";
import ModalFunctional from "./ModalFunctional";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="header__title">3.4 y 3.5: Modal</h1>
          <a
            className="header__logo"
            href="https://github.com/Adalab/ejercicios-en-clase-k/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/Adalab/resources/master/images/adalab-logo-32x32.png"
              alt="Adalab logo"
            />
            <span className="hidden">Ir al repo</span>
          </a>
        </header>
        <main className="container">
          {/* 
          Podéis cambiar ModalClass por ModalFunctional para usar una u otra
          Os he dejado las dos, que hacen lo mismo, con propósitos académicos. 
           */}
          <ModalClass>
            <h3>¡Ha ganado un premio!</h3>
            <p>Haz click aquí para que nos pongamos en contacto contigo.</p>
          </ModalClass>
          
          <h3>Título</h3>
          <p>
            <strong>Este contenido no se puede usar mientras esté abierta la modal.</strong>
          </p>
          <p>
            Quis soluta autem vero quod rerum magni quia consectetur minima. Sit iste quia quia aut. Qui delectus labore
            quis ipsam qui quia iste magnam dolorem. Sunt et praesentium. Nihil eius voluptatum quas excepturi.
          </p>
          <p>
            Et nostrum deleniti nisi aut. Architecto velit enim nulla. Natus quaerat nostrum minus id ut et reiciendis
            autem. Est delectus neque voluptatem placeat velit aut ab atque repellendus. Reprehenderit facere quam neque
            nesciunt molestias perspiciatis. Atque rerum explicabo.
          </p>
          <p>
            Ex nihil est quisquam exercitationem ut libero quod commodi. Sit ea beatae dolor at. Doloremque sit
            reprehenderit eligendi dolorem voluptas ut ullam pariatur earum. Et esse dicta aspernatur. Quis molestiae
            temporibus.
          </p>
        </main>
      </div>
    );
  }
}

export default App;
