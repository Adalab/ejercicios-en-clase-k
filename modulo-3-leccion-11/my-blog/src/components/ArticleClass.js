import React from 'react';
import PropTypes from 'prop-types';

class ArticleClass extends React.Component {
  render() {
    return (
      <div className="Article">
        <h2>Articulo {this.props.match.params.id}</h2>
      </div>
    );
  }
}

ArticleClass.propTypes = {
  match: PropTypes.object,
  data: PropTypes.object.isRequired,
};

export default ArticleClass;