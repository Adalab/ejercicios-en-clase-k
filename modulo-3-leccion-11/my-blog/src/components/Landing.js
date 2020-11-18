import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Landing = (props) => {
  return (
    <ul>
      {props.list.map((articleData) => (
        <li key={articleData.id}>
          <Link to={"/article/" + articleData.id}>
            <article>
              <h3>{articleData.title}</h3>
              <p>{articleData.short}</p>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
}

Landing.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Landing;