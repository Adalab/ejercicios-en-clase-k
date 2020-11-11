import React from 'react';
import ClubList from './ClubList';
import clubs from '../data/clubs.json';

class App extends React.Component {
  render() {
    console.log(clubs);
    return (
      <div>
        App
        <ClubList clubs={clubs} />
      </div>
    );
  }
}

export default App;
