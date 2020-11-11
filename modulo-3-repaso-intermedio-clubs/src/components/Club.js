import React from 'react';

const Club = props => {
  const items = props.club.members.map((member, index) => {
    return <li key={index}>{member}</li>;
  });

  return (
    <article>
      <h2>{props.club.name}</h2>
      <i className={props.club.fa} />
      <h3>Members:</h3>
      <ul className="card__description">{items}</ul>
    </article>
  );
};

export default Club;
