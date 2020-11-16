import PropTypes from "prop-types";

const FilterGender = () => {
  const handleChange = (ev) => {};

  return (
    <>
      <label className="form__label display-block" htmlFor="gender">
        Género:
      </label>

      <select className="form__input-text" name="gender" id="gender" onChange={handleChange}>
        <option value="all">Todos</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre</option>
        <option value="no-binary">No binario</option>
      </select>
    </>
  );
};

FilterGender.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default FilterGender;
