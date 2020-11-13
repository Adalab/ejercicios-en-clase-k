import React from 'react';
import Form from './Form';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      job: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(data) {
    this.setState({
      email: data
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Ejemplo de lifting</h1>
        <Form label="Email" handleInputChangeFoo={this.handleInputChange} />
        <p>Email: {this.state.email}</p>
      </div>
    );
  }
}

export default App;
