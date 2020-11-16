import React from "react";
import PropTypes from "prop-types";

const Text = (props) => {
  const changeInput = (ev) => {
    const inputId = ev.currentTarget.id;
    const inputValue = ev.currentTarget.value;

    props.handleChange(inputId, inputValue);
  }

  return (
    <div className="Text">
      <label htmlFor={props.id} className="form__label">{props.text}:</label>
      <input
        className="form__text"
        type="text"
        name={props.id}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={changeInput}
      />
      <p className="form__error">{props.error}</p>
    </div>
  );
};

Text.propTypes = {};

export default Text;
