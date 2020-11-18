import React from "react";
import { Link, withRouter } from "react-router-dom";

const Landing = (props) => {
  const handleClick = () => {
    props.history.push("/home");
  };

  return (
    <div className="Landing">
      <h2>Bienvenida!</h2>
      <p>
        Dime tu nombre
        <input type="text" onChange={props.handleChange} />
      </p>
      <Link to="/home">Entrar</Link>
      <Link to="/home">
        <button>Log in</button>
      </Link>

      {/* PAIR!!! <Redirect to="" /> */}

      <button onClick={handleClick}>Log in (JS)</button>
    </div>
  );
};

export default withRouter(Landing);