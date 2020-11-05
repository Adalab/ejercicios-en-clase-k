import React from 'react';
import PropTypes from "prop-types";
import './AdalabersList.scss';
import AdalaberDetail from './AdalaberDetail';

class AdalabersList extends React.Component {
  render() {
    // this.props.list

    const html = [];

    for (let i = 0; i < this.props.list.length; i++) {
      const eachAdalaber = this.props.list[i];
      html.push(
        <AdalaberDetail key={i} name={eachAdalaber.fullname} promo={eachAdalaber.promo} github={eachAdalaber.github} />
      );
    }

    return (
      <section className="listing">
        <div className="listing__count">
          {this.props.list.length === 0 ? "No hay" : this.props.list.length} elementos
        </div>
        <div className="listing__header">Listado de Adalabers</div>
        <ul className="listing__content">{html}</ul>
      </section>
    );
  }
}

AdalabersList.default = {
  list: []
};

AdalabersList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default AdalabersList;