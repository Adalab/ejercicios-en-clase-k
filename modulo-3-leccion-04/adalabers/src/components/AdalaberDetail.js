import React from 'react';
import PropTypes from "prop-types";
import './AdalaberDetail.scss';

class AdalaberDetail extends React.Component {
  /*
    this.props.name
    this.props.promo
    this.props.github
  */
  render() {
    const githubURL = `https://github.com/${this.props.github}`;
    
    return (
      <li className="listing__item">
        <h3 className="listing__item--title" onClick={this.handleClickTitle}>
          {this.props.name}
        </h3>
        <div>
          <div className="listing__item--imageContainer">
            <img className="listing__item--image" src="http://placekitten.com//250" alt="Foto de perfil"/>
          </div>
          <span>Promo-{this.props.promo}</span>

          <span>
            <a href={githubURL} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </span>
        </div>
      </li>
    );
  }
}

AdalaberDetail.propTypes = {
  name: PropTypes.string.isRequired,
  promo: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired
}

export default AdalaberDetail;