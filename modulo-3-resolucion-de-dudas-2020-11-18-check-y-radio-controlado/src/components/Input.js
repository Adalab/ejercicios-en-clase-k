import React from 'react';
import '../stylesheets/App.scss';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(ev) {
    this.props.handleChange(ev.target.checked);
  }

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          type="checkbox"
          value="Fua"
          checked={this.props.rememberPassword}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default Input;
