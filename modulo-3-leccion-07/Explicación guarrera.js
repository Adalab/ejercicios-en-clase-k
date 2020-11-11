
/* Con componente clásico */
class Clock extends React.Component {
  constructor(props) {
    super(props);

    const now = new Date();
    this.state = {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
    };
  }

  updateTime() {
    this.setState({
      seconds: this.state.seconds + 1
    })
  }
}

/* functional component */

function Clock(props) {
  const now = new Date();

  const [hours, setHours] = useState(now.getHours());
  const [minutes, setMinutes] = useState(now.getMinutes());
  const [seconds, setSeconds] = useState(now.getSeconds());

  const updateTime = () => {
    setSeconds( seconds +1 )
  }

  /*
  const array = useState(now.getHours()); // [ 9, function() ]
  const hours = array[0];
  const setHours = array[1];
  */
  //console.log(props);

  return (
    <div>{hours}:{minutes}</div>
  )
}