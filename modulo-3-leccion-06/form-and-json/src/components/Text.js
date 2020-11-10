import React from "react";
import PropTypes from "prop-types";

class Text extends React.Component {
  constructor(props) {
    super(props);

    this.changeInput = this.changeInput.bind(this);
  }
  changeInput(ev) {
    const element = ev.currentTarget;
    const newValue = element.value;

    console.log(newValue);

    this.props.handleBlur(newValue);
  }
  render() {
    return (
      <div className="Text">
        <label htmlFor={this.props.id} className="form__label">
          {this.props.text}:
        </label>
        <input
          type="text"
          name={this.props.id}
          id={this.props.id}
          placeholder={this.props.placeholder}
          className="form__text"
          onBlur={this.changeInput}
        />
      </div>
    );
  }
}

Text.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handleBlur: PropTypes.func
};

export default Text;
