import React from 'react';
import '../stylesheets/App.scss';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(ev) {
    console.log('Soy input', ev.target.value);
    this.props.handleChange(ev.target.value);
  }

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input type="text" onChange={this.handleInputChange} />
      </div>
    );
  }
}

export default Input;
