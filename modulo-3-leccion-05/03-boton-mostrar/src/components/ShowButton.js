import React from "react";
import PropTypes from "prop-types";

class ShowButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickHija = this.handleClickHija.bind(this);
  }
  handleClickHija(ev) {
    console.log("Eh! Soy la hija");

    this.props.handleClick(ev);
  }
  render() {
    return (
      <div className="button">
        <p>Pulsa aquí:</p>
        <button className="showButton" onClick={this.handleClickHija}>
          {this.props.text}
        </button>
      </div>
    );
  }
}

ShowButton.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
};

export default ShowButton;
