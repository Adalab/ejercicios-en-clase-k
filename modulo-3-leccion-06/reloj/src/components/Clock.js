import React from "react";
import "./Clock.scss";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    const now = new Date();

    this.state = {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
    };

    this.cambiarHora = this.cambiarHora.bind(this);

    setInterval(this.cambiarHora, 1000);
  }

  cambiarHora() {
    // NO this.state.seconds = this.state.seconds+1;

    const now = new Date();

    this.setState(
      {
        minutes: now.getMinutes(),
        seconds: now.getSeconds()
      }
    );

    /*
    Cómo se cambia el estado si depende del estado anterior:

    this.setState(
      (oldState) => {
        return {
          minutes: oldState.minutes+1,
          seconds: oldState.seconds+1
      } }
    );
    */

    // NO, MAL, CACA: this.forceUpdate();   // -> No lo vamos a usar más adelante
  }

  render() {
    console.log(this.state);

    //setInterval(this.update, 1000);

    return (
      <div className="clock">
        <span className="clock__number clock__hours">{this.state.hours}</span>:
        <span className="clock__number clock__minutes">{this.state.minutes.toString().padStart(2, "0")}</span>:
        <span className="clock__number clock__seconds">{this.state.seconds.toString().padStart(2, "0")}</span>
      </div>
    );
  }
}

export default Clock;
