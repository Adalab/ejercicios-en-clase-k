import { useState } from "react";
// import PropTypes from "prop-types";
import MommyShark from "./MommyShark";

function GrandmaShark(props) {
  const [textBabyShark, setTextBabyShark] = useState("inicial");

  const changeInput = (ev) => {
    setTextBabyShark(ev.currentTarget.value);
  };

  return (
    <div>
      <MommyShark
        handleChange={changeInput}
        text={textBabyShark} />
    </div>
  );
}

export default GrandmaShark;