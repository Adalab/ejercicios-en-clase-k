import { useState, useEffect } from 'react';
import log from "../Services/Log";

const ClockFunctional = () => {
  log("render");

  const today = new Date();

  const [hours, setHours] = useState(today.getHours());
  const [minutes, setMinutes] = useState(today.getMinutes());
  const [seconds, setSeconds] = useState(today.getSeconds());

  const updateClock = () => {
    log("UPDATE_CLOCK");

    const today = new Date();

    setHours(today.getHours());
    setMinutes(today.getMinutes());
    setSeconds(today.getSeconds());
  };

  useEffect(() => {
    /*  componentDidMount [] componentDidUpdate  */
    log("useEffect");

    const timer = setInterval(updateClock, 1000);

    // Aqui va el FETCH
    
    /*  componentDidMount componentDidUpdate  */
    
    return () => {
      /* componentWillUnmount */
      log("useEffect return");

      clearInterval(timer);
      /* componentWillUnmount */
    };
  },[]);
  

  return (
    <div className="clock">
      <span className="clock__number clock__hours">{hours}</span>:
      <span className="clock__number clock__minutes">{minutes}</span>:
      <span className="clock__number clock__seconds">{seconds.toString().padStart(2, "0")}</span>
    </div>
  );
}

export default ClockFunctional;