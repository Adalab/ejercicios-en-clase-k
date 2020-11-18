import PropTypes from 'prop-types';
import LandingItemFunctional from "./LandingItemFunctional";

const LandingFunctional = (props) => {
  return (
    <ul>
      {props.list.map((articleData) => (
        <li key={articleData.id}>
          <LandingItemFunctional articleData={articleData}/>
        </li>
      ))}
    </ul>
  );
}

LandingFunctional.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LandingFunctional;