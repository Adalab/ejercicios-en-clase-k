import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

const ModalFunctional = (props) => {
  return (
    <div className="background">
      <div className="modal__window">
        <div className="modal__button modal__close">
          <button onClick={props.handleClose}>X</button>
        </div>
        {props.children}
      </div>
    </div>
  );
}

/*
const ModalFunctional = (props) => {
  
  // Creo una función intermedia para gestionar el click
  const handleClick = (ev) => {

    // Esta función arrow maneja el evento click del botón X pero
    // lo que tenemos que hacer desde aquí es llamar al método
    // de la clase App que nos lo pasa en la prop handleClose:
    props.handleClose();
  };
    
  return (
    <div className="background">
      <div className="modal__window">
        <div className="modal__button modal__close">
          {/*
            handleClick está definida dentro de render.
            No le hace falta ni this, ni props
          * /}
          <button onClick={handleClick}>X</button>
        </div>
        {props.children}
      </div>
    </div>
  );
};
*/

ModalFunctional.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  handleClose: PropTypes.func
};

export default ModalFunctional;