import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LandingItemFunctional = (props) => {
  const { id, title, short } = props.articleData;

  return (
    <Link to={"/article/" + id}>
      <article>
        <h3>{title}</h3>
        <p>{short}</p>
      </article>
    </Link>
  );
};

LandingItemFunctional.propTypes = {
  articleData: PropTypes.object,
};

export default LandingItemFunctional;