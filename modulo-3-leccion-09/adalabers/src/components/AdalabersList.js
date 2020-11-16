import PropTypes from "prop-types";
import AdalaberDetail from "./AdalaberDetail";
import "./AdalabersList.scss";

const AdalabersList = (props) => {

  return (
    <section className="listing">
      <div className="listing__count">{props.list.length ? props.list.length : "No hay "} adalabers</div>
      <div className="listing__header">Listado de Adalabers</div>
      <ul className="listing__content">
        {props.list.map((person, i) => (
          <li key={i} className="listing__item">
            {/* <AdalaberDetail {...person}></AdalaberDetail> */}
            <AdalaberDetail person={person}></AdalaberDetail>
          </li>
        ))}
      </ul>
    </section>
  );
};

AdalabersList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default AdalabersList;
