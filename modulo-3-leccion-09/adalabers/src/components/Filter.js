import "./Filter.scss";
import PropTypes from "prop-types";

const Filter = (props) => {
  return (
    <div className="form">
      <div className="form__Text">
        <input
          type="text"
          name="name"
          id="name"
          className="form__text"
          value={props.textValue}
          onChange={props.handleChange}
        />
        Alumna:
        <input type="checkbox" name="adalaber" />
      </div>
    </div>
  );
};

Filter.defaultProps = {
  textValue: ""
}

Filter.propTypes = {
  textValue: PropTypes.string,
  handleChange: PropTypes.func.isRequired
}

export default Filter;
