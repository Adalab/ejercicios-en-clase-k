import React from 'react';
import Form from './Form';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Ejemplo de props y lifting</h1>
        <Form name="asdf" />
      </div>
    );
  }
}

export default App;
