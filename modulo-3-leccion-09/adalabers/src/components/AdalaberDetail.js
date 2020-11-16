import { useState } from "react";
import PropTypes from "prop-types";

const AdalaberDetail = (props) => {
  const [contentStyle, setContentStyle] = useState("hidden");

  const handleClickTitle = () => {
    setContentStyle(contentStyle === "hidden" ? "" : "hidden");
  }


  const {fullname:name, github, promo} = props.person;

  const randomWidth = 225 + Math.round(Math.random() * 50);
  const randomCatImageURL = `http://placekitten.com/${randomWidth}`;
  const githubURL = `https://github.com/${github}`;


  return (
    <div>
      <h3 className="listing__item--title" onClick={handleClickTitle}>
        {name || "Sin nombre"}
      </h3>
      <div className={contentStyle}>
        <div className="listing__item--imageContainer">
          <img className="listing__item--image" src={randomCatImageURL} alt={name} />
        </div>
        <span>Promo-{promo}</span>
        <span>
          {props && github && (
            <a href={githubURL} target="BLANK">
              GitHub
            </a>
          )}
        </span>
      </div>
    </div>
  );
};

AdalaberDetail.propTypes = {
  person: PropTypes.object.isRequired
}

export default AdalaberDetail;
