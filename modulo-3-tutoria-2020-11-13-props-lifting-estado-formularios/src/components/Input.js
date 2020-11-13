import React from 'react';

const Input = props => {
  const handleInputChange = ev => {
    // console.log('Me han cambiado', ev.target.value);
    props.handleInput(props.name, ev.target.value);
  };
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="text"
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={handleInputChange}
      />
      {/* input.addEventListener('change', handleInputChange) */}
    </div>
  );
};

export default Input;
