import React from 'react';
import './MainMenu.scss';

class MainMenu extends React.Component {
  render() {
    return (
      <nav>
        <ul className="mainMenu">
          <li className="mainMenu__item">Últimas entradas</li>
          <li className="mainMenu__item">Categorías</li>
          <li className="mainMenu__item">Política de privacidad</li>
          <li className="mainMenu__item">Contacto</li>
        </ul>
      </nav>
    );
  }
}

export default MainMenu;