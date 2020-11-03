import React from 'react';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Holis!</h1>
        </header>
        <main>
          <div className="principal"></div>
        </main>
      </div>
    );
  }
}


export default App;
