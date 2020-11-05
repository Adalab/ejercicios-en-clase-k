import React from 'react';
import PropTypes from "prop-types";

class Weather extends React.Component {
  // this.props.text
  render() {
    return <div className="weather">Hoy está {this.props.text}</div>;
  }
}

Weather.propTypes = {
  text: PropTypes.string.isRequired
};

export default Weather;