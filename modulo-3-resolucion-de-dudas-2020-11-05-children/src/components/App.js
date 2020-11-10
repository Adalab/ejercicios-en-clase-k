import React from 'react';
import Collapsable from './Collapsable';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Ejercicio de collapsables</h1>

        <Collapsable title="Diseña">
          <h3>Diseña aquí</h3>
          <p>Un párrafo</p>
        </Collapsable>

        <Collapsable title="Rellena">Rellena aquí</Collapsable>
      </div>
    );
  }
}

export default App;
