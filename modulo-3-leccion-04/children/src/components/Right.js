import React from 'react';
import './Right.scss';

class Right extends React.Component {
  render() {
    return (
      <section className="right">
        <p>Antes del titulo</p>
        {this.props.children}
        <span>Despues del parrafo</span>
      </section>
    );
  }
}

export default Right;