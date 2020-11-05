import React from 'react';
import PropTypes from "prop-types";

class ProfesList extends React.Component {
  render() {
    // this.props.list

    let html = [];

    for (let i = 0; i < this.props.list.length; i++) {
      // this.props.list[i]
      html.push(<li key={i} id={i}>{this.props.list[i]}</li>);
    }
    

    return (
      <div className="profes_list">
        <h3>{this.props.title}</h3>
        <ul>
          {html}
        </ul>
      </div>
    );
  }
}

ProfesList.defaultProps = {
  title: "Lista de profesores"
};

ProfesList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string
};

export default ProfesList;