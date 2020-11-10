import React from 'react';
import Input from './Input';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(inputValue) {
    console.log('Soy Form', inputValue);
    this.inputValue = inputValue;
    this.forceUpdate();
  }

  render() {
    return (
      <form>
        <h2>Mi formulario</h2>
        <p>{this.inputValue}</p>
        <Input nameInfo={this.props.name} handleChange={this.handleChange} />
      </form>
    );
  }
}

export default Form;
