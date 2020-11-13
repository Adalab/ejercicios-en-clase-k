import React from 'react';
import PropTypes from 'prop-types';
import BabyShark from './BabyShark';

const MommyShark = (props) => {
    return (
      <div>
        <BabyShark
          handleChange={props.handleChange}
          text={props.text} />
      </div>
    );
  }

MommyShark.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default MommyShark;