import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import PropTypes from "prop-types";

const ArticleFunctional = (props) => {

  const { id } = useParams();  // {id="46", name="Kizzy"}  Pero en esta app sólo viene id

  const { title, text, image, link } = props.data;

  return (
    <div className="Article">
      <h2>Articulo {props.match.params.id}</h2>
      <h2>Artículo {id}</h2>
      <h2>{title}</h2>
      <p>{text}</p>
      <img src={image} alt={title} />
      <a href={link}>Enlace</a>
      <Link to="/">Volver a listado</Link>
    </div>
  );
}

ArticleFunctional.propTypes = {
  match: PropTypes.object,
  data: PropTypes.object.isRequired
};

export default ArticleFunctional;