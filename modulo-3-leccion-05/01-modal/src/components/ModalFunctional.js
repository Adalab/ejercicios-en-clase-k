import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

/* class ModalClass extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="modal__window">
          <div className="modal__button modal__close">
            <button>X</button>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
} */

const ModalFunctional = (props) => {
  const html = props.children;

  return (
    <div className="background">
      <div className="modal__window">
        <div className="modal__button modal__close">
          <button>X</button>
        </div>
        {html}
      </div>
    </div>
  );
}

ModalFunctional.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default ModalFunctional;