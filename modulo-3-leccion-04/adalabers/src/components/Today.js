import React from 'react';
import PropTypes from "prop-types";

class Today extends React.Component {
  render() {
    const monthNumber = this.props.month;
    const yearNumber = this.props.year;

    let monthName = "otro";

    if (monthNumber === 1) {
      monthName = "enero";
    } else if (monthNumber === 2) {
      monthName = "febrero";
    } else if (monthNumber === 3) {
      monthName = "marzo";
    } else if (monthNumber === 4) {
      monthName = "abril";
    } else if (monthNumber === 5) {
      monthName = "mayo";
    } else if (monthNumber === 6) {
      monthName = "junio";
    } else if (monthNumber === 7) {
      monthName = "julio";
    } else if (monthNumber === 8) {
      monthName = "agosto";
    } else if (monthNumber === 9) {
      monthName = "septiembre";
    } else if (monthNumber === 10) {
      monthName = "octubre";
    } else if (monthNumber === 11) {
      monthName = "noviembre";
    } else if (monthNumber === 12) {
      monthName = "diciembre";
    }

    return (
      <div className="today">
        Hoy es {this.props.day} de {monthName} de {yearNumber}
      </div>
    );
  }
}

// day, month, year

Today.defaultProps = {
  month: 11,
  year: 2020
};

Today.propTypes = {
  day: PropTypes.number.isRequired,
  month: PropTypes.number,
  year: PropTypes.number
};

export default Today;