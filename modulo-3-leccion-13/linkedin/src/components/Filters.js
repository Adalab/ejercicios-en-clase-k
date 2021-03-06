import PropTypes from 'prop-types';
import FilterGender from './FilterGender';
import FilterLocation from './FilterLocation';
import FilterName from './FilterName';
import './Filters.scss';

const Filters = (props) => (
  <section className="filters">
    <form>
      <FilterName handleFilter={props.handleFilter} />
      <FilterGender handleFilter={props.handleFilter} />
      <FilterLocation handleFilter={props.handleFilter} cities={props.cities} />
    </form>
  </section>
);

Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Filters;