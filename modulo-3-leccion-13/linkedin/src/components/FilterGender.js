import PropTypes from "prop-types";

const FilterGender = (props) => {
  const handleChange = (ev) => {

    const data = {
      id: ev.currentTarget.id,
      value: ev.currentTarget.value
    };

    props.handleFilter(data);
  };

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
