import React from 'react';
import HeaderWithClass from './HeaderWithClass';
import HeaderWithFunctional from './HeaderWithFunctional';

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderWithClass title="Título (class)" />
        <HeaderWithFunctional title="Título (funcional)" />
      </div>
    );
  }
}

export default App;
