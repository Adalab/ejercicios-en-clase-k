import React from 'react';
import PropTypes from 'prop-types';

class ArticleClass extends React.Component {
  render() {
    return (
      <div className="Article">
        <h2>Articulo {this.props.match.params.name}</h2>
      </div>
    );
  }
}

ArticleClass.propTypes = {

};

export default ArticleClass;