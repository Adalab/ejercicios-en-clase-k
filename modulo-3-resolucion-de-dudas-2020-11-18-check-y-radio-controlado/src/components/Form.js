import React from 'react';
import Input from './Input';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rememberPassword: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({
      rememberPassword: checked
    });
  }

  render() {
    return (
      <form>
        <h2>Mi formulario</h2>
        <p>{this.state.rememberPassword}</p>
        <Input rememberPassword={this.state.rememberPassword} handleChange={this.handleChange} />
      </form>
    );
  }
}

export default Form;
