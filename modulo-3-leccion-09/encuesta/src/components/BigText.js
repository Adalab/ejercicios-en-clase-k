import React from "react";
import PropTypes from "prop-types";

const BigText = (props) => {
  const changeInput = (ev) => {
    const inputId = ev.currentTarget.id;
    const inputValue = ev.currentTarget.value;

    props.handleChange(inputId, inputValue);
  }

  return (
    <div className="Text">
      <label htmlFor={props.id} className="form__label">{props.text}:</label>
      <textarea
        className="form__text"
        type="text"
        name={props.id}
        id={props.id}
        placeholder={props.placeholder}
        onChange={changeInput}
      >{props.value}
      </textarea>
      <p className="form__error">{props.error}</p>
    </div>
  );
};

BigText.propTypes = {};

export default BigText;
