import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const UserItem = (props) => {
  const { name, city, image, gender: originalGender } = props.user;

  const gender = originalGender;

/*   const translateGender = (gender) => {
    if (gender === "female") {
      return "Mujer";
    }
    else if (gender === "male") {
      return "Hombre";
    }
    else {
      return "No binario";
    }
  } */

  let genderEnEspañol = "No binario";
  if (gender === "female") {
    genderEnEspañol = "Mujer";
  }
  else if (gender === "male") {
    genderEnEspañol = "Hombre";
  }

  return (
    <Link to={"/" + props.user.username }>
      <article className="users__card">
        <div className="users__card--imgContainer">
          <img className="users__card--img" src={image} alt={`Foto de ${name}`} title={`Foto de NAME`} />
        </div>
        <h4 className="users__card--title">{name}</h4>
        <p className="users__card--description">
          {city} / {genderEnEspañol}
        </p>
      </article>
    </Link>
  );
};

UserItem.propTypes = {
  /* handleFilter: PropTypes.func.isRequired, */
  user: PropTypes.object.isRequired,
};

export default UserItem;
