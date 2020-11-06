import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

class ModalClass extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="modal__window">
          <div className="modal__button modal__close">
            {/*
              La función que se ejecutará cuando la usuaria haga click
              en el botón no es de esta clase-componente, sino de App
              y me pasa la función por atributo-props:
             */}
            <button onClick={this.props.handleClose}>X</button>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

/*

Otra forma: con una función intermedia

class ModalClass extends React.Component {
  constructor(props) {
    super(props);
  
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(ev) {
    // Maneja el evento click del botón X pero lo que tenemos
    // que hacer desde aquí es llamar al método de la clase
    // App que nos lo pasa en la prop handleClose:

    this.props.handleClose(ev);
  }
  render() {
    return (
      <div className="background">
        <div className="modal__window">
          <div className="modal__button modal__close">
            <button onClick={this.handleClick}>X</button>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
*/
              
ModalClass.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  handleClose: PropTypes.func
}

export default ModalClass;