import React from 'react';

class Counter extends React.Component {
  render() {
    return (
      <section className="counter">
        <h5>Contador de visitas</h5>
        <span className="counter__number">3 visitas</span>
      </section>
    );
  }
}

export default Counter;