import React from 'react';
import Input from './Input';
import Reset from './Reset';

const Form = props => {
  return (
    <div>
      <Input
        label="Dirección:"
        id="address"
        name="address"
        value={props.address}
        handleInput={props.handleInput}
      />
      <Input
        label="Ciudad:"
        id="city"
        name="city"
        value={props.city}
        handleInput={props.handleInput}
      />
      <Reset handleReset={props.handleReset} />
    </div>
  );
};

export default Form;
