import React from 'react';
import PropTypes from 'prop-types';
import LandingItemClass from './LandingItemClass';

class LandingClass extends React.Component {
  render() {
    return (
      <ul>
        {this.props.list.map((articleData) => (
          <li key={articleData.id}>
            <LandingItemClass articleData={articleData} />
          </li>
        ))}
      </ul>
    );
  }
}

LandingClass.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LandingClass;