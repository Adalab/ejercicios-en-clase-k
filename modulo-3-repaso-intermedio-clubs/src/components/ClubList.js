import React from 'react';
import Club from './Club';

class ClubList extends React.Component {
  render() {
    // const items = [<Club name="Club 1" />, <Club name="Club 2" />, <Club name="Club 3" />];

    const items = this.props.clubs.map((club, index) => {
      return (
        <li key={club.id} id={index} className="card" title={club.name}>
          <Club club={club} />
        </li>
      );
    });

    return (
      <div>
        Club list
        <ul className="cards">{items}</ul>
      </div>
    );
  }
}

export default ClubList;
