import React from 'react';
import PropTypes from 'prop-types';

const Title = props => {
  // esto es lo que hace react por dentro
  // if (props.title === undefined) {
  //   props.title = 'Título por defecto';
  // }
  return (
    <>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
    </>
  );
};

Title.defaultProps = {
  title: 'Título por defecto'
};

Title.propTypes = {
  subtitle: PropTypes.any.isRequired
};

export default Title;
