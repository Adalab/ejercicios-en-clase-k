import React from 'react';

const Button = props => {
  const handleClick = () => {
    props.handleBtn();
  };
  return <button onClick={handleClick}>Clíckame</button>;
};

export default Button;
