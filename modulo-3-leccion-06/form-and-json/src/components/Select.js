import React from "react";
import PropTypes from "prop-types";

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.changeSelect = this.changeSelect.bind(this);
  }

  changeSelect(ev) {
    const element = ev.currentTarget;
    const newValue = element.value;

    console.log(newValue);

    this.props.handleChange(newValue);
  }

  render() {
    console.log(this.props);

    return (
      <div className="Select">
        <label htmlFor={this.props.id} className="form__label">
          {this.props.text}:
        </label>
        <select name={this.props.id} id={this.props.id} className="form__select" onChange={this.changeSelect}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Select;
