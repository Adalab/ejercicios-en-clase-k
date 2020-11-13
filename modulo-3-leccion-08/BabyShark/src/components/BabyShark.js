import React from "react";
import PropTypes from "prop-types";

const BabyShark = (props) => {
  console.log("Render BabyShark. Props:");
  console.log(props);

  return (
    <div>
      <label htmlFor="text">Texto:</label>
      <input
        type="text"
        name="text"
        id="text"
        value={props.text}
        onChange={props.handleChange} />
      <p>{props.text}</p>
    </div>
  );
};

BabyShark.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default BabyShark;
