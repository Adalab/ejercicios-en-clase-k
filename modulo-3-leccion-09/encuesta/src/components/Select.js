import React from "react";
import PropTypes from "prop-types";

const Select = (props) => {

  const changeSelect = (ev) => {
    const inputId = ev.currentTarget.id;
    const inputValue = ev.currentTarget.value;

    props.handleChange(inputId, inputValue);
  };

  return (
    <div className="Select">
      <label htmlFor={props.id} className="form__label">
        {props.text}:
      </label>
      <select name={props.id} id={props.id} className="form__select" onClick={changeSelect}>
        <option readonly={true} disabled={true} selected={props.value === ""}>
          Escoge una
        </option>
        {props.list.map(({ id, name }) => (
          <option value={id} selected={props.value === id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

/* class Select extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(ev) {
    const selectChanged = ev.currentTarget;
    const valueSelected = selectChanged.value;

    console.log(valueSelected);

    this.props.handleChange(valueSelected);
  }
  render() {
    return (
      <div className="Select">
        <label htmlFor={this.props.id} className="form__label">
          {this.props.text}:
        </label>
        <select name={this.props.id} id={this.props.id} className="form__select" onClick={this.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    );
  }
} */

Select.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Select;
