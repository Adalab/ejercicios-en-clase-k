import React from "react";
import PropTypes from "prop-types";

class ResultJson extends React.Component {
  render() {
    const jsonText = JSON.stringify(this.props.result);

    const jsonPrettyText = jsonText;

    return (
      <section className="result">
        <h3 className="result__title">JSON resultante:</h3>
        <pre className="result__json">{jsonPrettyText}</pre>
      </section>
    );
  }
}

ResultJson.propTypes = {};

export default ResultJson;
