import React from 'react';
import Input from './Input';

class Form extends React.Component {
  render() {
    return (
      <form>
        <Input label={this.props.label} handleInputChange123={this.props.handleInputChangeFoo} />
      </form>
    );
  }
}

export default Form;
