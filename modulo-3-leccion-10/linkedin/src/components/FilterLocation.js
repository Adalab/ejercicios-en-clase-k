import PropTypes from "prop-types";

const FilterLocation = () => {
  const handleChange = (ev) => {};

  return (
    <>
      <label className="form__label display-block" htmlFor="gender">
        Ciudad:
      </label>
      <label key={"index"} className="display-block">
        <input type="checkbox" name="location" value={"city"} onChange={handleChange} />
        {"city"}
      </label>
    </>
  );
};

FilterLocation.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default FilterLocation;
