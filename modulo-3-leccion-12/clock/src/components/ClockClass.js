import React from 'react';
import './Clock.scss';
import log from '../Services/Log';

class ClockClass extends React.Component {
  constructor(props) {
    super(props);

    log("constructor");

    this.timer = null;
    const today = new Date();

    this.state = {
      hours: today.getHours(),
      minutes: today.getMinutes(),
      seconds: today.getSeconds(),
    };

    this.updateClock = this.updateClock.bind(this);
  }

  updateClock() {
    log("UPDATE_CLOCK");

    const today = new Date();

    this.setState({
      hours: today.getHours(),
      minutes: today.getMinutes(),
      seconds: today.getSeconds(),
    });
  }

  componentDidMount() {
    log("componentDidMount");

    this.timer = setInterval(this.updateClock, 1000);

    // Aqui va el FETCH
  }

  componentDidUpdate() {
    log("componentDidUpdate");
  }

  componentWillUnmount() {
    log("componentWillUnmount");

    clearInterval(this.timer);
  }
    
  render() {
    log("render");

    return (
      <div className="clock">
        <span className="clock__number clock__hours">{this.state.hours}</span>:
        <span className="clock__number clock__minutes">{this.state.minutes}</span>:
        <span className="clock__number clock__seconds">{this.state.seconds.toString().padStart(2,'0')}</span>
      </div>
    );
  }
}

export default ClockClass;