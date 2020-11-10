import React from 'react';

const HeaderWithFunctional = props => {
  const handleClick = ev => {};

  return <header onClick={handleClick}>{props.title}</header>;
};

export default HeaderWithFunctional;
