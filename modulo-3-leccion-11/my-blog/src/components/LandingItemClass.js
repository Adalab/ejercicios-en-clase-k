import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class LandingItemClass extends React.Component {
  render() {
    const { id, title, short } = this.props.articleData;

    return (
      <Link to={"/article/" + id}>
        <article>
          <h3>{title}</h3>
          <p>{short}</p>
        </article>
      </Link>
    );
  }
}

LandingItemClass.propTypes = {
  articleData: PropTypes.object,
};

export default LandingItemClass;