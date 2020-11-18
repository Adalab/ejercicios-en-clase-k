import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

class ArticleClass extends React.Component {
  render() {
    const { id, title, text, image, link } = this.props.data;
    
    return (
      <div className="Article">
        <h2>Articulo {this.props.match.params.id}</h2>
        <h2>Artículo {id}</h2>
        <h2>{title}</h2>
        <p>{text}</p>
        <img src={image} alt={title} />
        <a href={link}>Enlace</a>
        <Link to="/">Volver a listado</Link>
      </div>
    );
  }
}

ArticleClass.propTypes = {
  match: PropTypes.object,
  data: PropTypes.object.isRequired,
};

export default ArticleClass;