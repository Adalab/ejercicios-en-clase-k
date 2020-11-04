import React from 'react';

class Clock extends React.Component {
  render() {
    return (
      <section className="clock">
        <h5>Hora:</h5>
        9:20:<span className="clock__value">00</span>
      </section>
    );
  }
}

export default Clock;